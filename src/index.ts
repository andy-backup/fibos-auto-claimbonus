import { claimrewards } from './lib/claimrewards';

const main = async () => {
  try {
    const res = await claimrewards();
    console.log(res);
  } catch (e) {
    console.log('error:');
    console.error(e);
  }
};
main();

setInterval(main, 1 * 60 * 60 * 1000 + 5000);
