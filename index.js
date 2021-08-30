import { AkkaServerless, Action } from "@lightbend/akkaserverless-javascript-sdk";

const helloAction = new Action(
    ["hello_action.proto"],
    "js.hello.world.HelloService",
    {
        includeDirs: ["protos"],
    }
)

const Response = helloAction.lookupType("js.hello.world.Response");

helloAction.setCommandHandlers({
    HelloAction: (request, context) => context.write(Response.create({ message: "Hello Lighbend!" }))
})

new AkkaServerless().addComponent(helloAction).start();
