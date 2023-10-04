const server = Bun.serve({
    port: 4000,
    async fetch(req) {
        const url = new URL(req.url);

        console.log("🚀 ~ file: file-upload.ts:5 ~ fetch ~ url:", url)
        console.log("🚀 ~ file: file-upload.ts:4 ~ fetch ~ req:", req)

        // return index.html for root path
        if (url.pathname === "/")
            return new Response(Bun.file("file.html"), {
                headers: {
                    "Content-Type": "text/html",
                },
            });

        // Test
        if (url.pathname === 'users')
            return new Response(JSON.stringify({
                name: "Om",
                age: 25,
                village: "Mahwal"
            }))

        // parse formdata at /action
        if (url.pathname === '/action' && req.method === 'POST') {
            const formdata = await req.formData();
            console.log("🚀 ~ file: file-upload.ts:17 ~ fetch ~ formdata:", formdata)

            const name = formdata.get('name');
            console.log("🚀 ~ file: file-upload.ts:18 ~ fetch ~ name:", name)

            const profilePicture = formdata.get('profilePicture');
            console.log("🚀 ~ file: file-upload.ts:21 ~ fetch ~ profilePicture:", profilePicture)

            if (!profilePicture) throw new Error('Must upload a profile picture.');

            // write profilePicture to disk
            await Bun.write('profilePicture.png', profilePicture);
            return new Response("Success");
        }

        return new Response("Not Found", { status: 404 });
    },
});

console.log(`Listening on http://localhost:${server.port}`);
