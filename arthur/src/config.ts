const Env = (process.env.NODE_ENV || 'development') as 'production' | 'development';

const Config = {
  Port: 8111,
  Origin: Env === 'production' ? 'https://arthur.edublocks.org' : 'http://localhost:8111',

  // GOOGLE_CLIENT_ID: '804475813397-pud0hhbjvkthqabjebeb1erm9j1t7grl.apps.googleusercontent.com',
  // GOOGLE_CLIENT_SECRET: 'G8UKEn0QNL8ksF_OlvVnvcSs',

  GOOGLE_CLIENT_ID: '544931002683-pc3uhbascn79vlrs14kp57rs2e567f2v.apps.googleusercontent.com',
  GOOGLE_CLIENT_SECRET: 'Foylqyf-HSU3Be0l8AG_glkl',

  GITHUB_CLIENT_ID: '8eea1c1e71edf8d874f9',
  GITHUB_CLIENT_SECRET: '983990a7808c01ba05f4e7dcd79862699fdcd2b9',
} as const;

export default Config;
