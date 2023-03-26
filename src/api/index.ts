import axios, { AxiosError } from 'axios';
import { logoutUser } from 'hooks/useUser/useLoginUser';
import { GetServerSidePropsContext } from 'next';
import { parseCookies, setCookie } from 'nookies';
const baseURL = 'https://digitalmoney.ctd.academy';

export function setupApiClient(
    ctx: GetServerSidePropsContext | undefined = undefined
) {
    const api = axios.create({
        baseURL: baseURL
    });
    const { '@digitalmoney:token': token } = parseCookies(ctx);
    api.defaults.headers.common.Authorization = token;

    api.interceptors.request.use(function (config) {
        const { '@digitalmoney:token': token } = parseCookies(ctx);
        api.defaults.headers.common.Authorization = token;
        if (config.method === 'patch') {
            api.defaults.headers.common.Accept = 'application/json';
            api.defaults.headers.common['Content-Type'] = 'application/json';
        }

        return config;
    });

    api.interceptors.response.use(
        function (response) {
            if (response.config.url === '/api/login') {
                setCookie(null, '@digitalmoney:token', response.data.token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/'
                });
            }

            return response;
        },
        function (error: AxiosError<{ error: string }>) {
            console.log('erro: ', error);
            if (
                error?.response?.status === 401 ||
                (404 && error instanceof AxiosError)
            ) {
                if (error?.response?.data['error'].includes('expired')) {
                    logoutUser({});
                }
                return Promise.reject(error);
            }
        }
    );
    return api;
}
