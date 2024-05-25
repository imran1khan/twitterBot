//https://twitter.com/home

async function start() {
  const res=await fetch('https://twitter.com/home');
  console.log(await res.text())
}
start();