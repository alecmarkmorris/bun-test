import figlet from "figlet";


const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url)

        if(url.pathname === '/ALGORITHM'){
            const body = figlet.textSync("Take your Panties Off");
            return new Response(body)
        }

        if(url.pathname === '/'){
            const body = figlet.textSync("Welcome To The Server");
            return new Response(body)
        }

        if(url.pathname === '/ALLI'){
            var message = figlet.textSync("I Love You");
            return new Response(message)
        }

        return new Response("404 NOT FOUND")
    }
})

console.log(`Listening on PORT http://localhost:${server.port}`);