import { getUserByPhone } from '~~/server/models/user';

export default defineEventHandler(async (event) => {
  const body = await readBody<{ phone: string; password: string; rememberMe: boolean }>(event);

  const { phone, password, rememberMe } = body;
  if (!phone || !password) {
    throw createError({
      statusCode: 400,
      message: 'Phone address and password are required',
    });
  }

  const userWithPassword = await getUserByPhone(phone);
  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      message: 'Bad credentials',
    });
  }

  const verified = await verify(userWithPassword.password, password);
  if (!verified) {
    throw createError({
      statusCode: 401,
      message: 'Bad credentials',
    });
  }

  const config = useRuntimeConfig();

  const session = serialize({ userId: userWithPassword.id });
  const signedSession = sign(session, config.cookieSecret);

  setCookie(event, config.cookieName, signedSession, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    expires: rememberMe
      ? new Date(Date.now() + parseInt(config.cookieRememberMeExpires))
      : new Date(Date.now() + parseInt(config.cookieExpires)),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return {
    user: userWithoutPassword,
  };
});
