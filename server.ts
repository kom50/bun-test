const server = Bun.serve({
    port: 3000,

   async fetch(req:Request, server) {
    console.log("🚀 ~ file: server.ts:4 ~ fetch ~ server:", req)
    
    const url = new URL(req.url);
    if(url.pathname === '/' && req.method === 'POST') {
      
      const data = await req.json()
  
      // console.log("🚀 ~ file: server.ts:7 ~ fetch ~ url:", url.searchParams)
  
      console.log("🚀 ~ file: server.ts:5 ~ fetch ~ data:", data)
  
        console.log("🚀 ~ file: server.ts:4 ~ fetch ~ request:", req.method, req.mode)
  
        const a = JSON.stringify({age:25, name:"OM"})
  
        console.log(a)
        return new Response(a, {
          status:200,
          statusText: "Ok",
          headers:{
            count:"1",
            "Set-Cookie": "myCookie=myCookieValue; Path=/",
            // "content-type":"text",
            // "Content-Encoding":"gzip"
          }
        });
    } 

    return new Response( JSON.stringify({age:25, name:"OM"}), {
          status:200,
          statusText: "Ok",
          headers:{
            count:"1",
            "Set-Cookie": "token=dfgbmkdfnldflfderedkgndndfjj; Expires=Tue Oct 03 2023 15:11:08 GMT; Secure; HttpOnly"
          }
        });
    },
});
  
console.log(`Listening on localhost:${server.port}`);
  