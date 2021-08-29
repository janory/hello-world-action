import { AkkaServerless, Action } from "@lightbend/akkaserverless-javascript-sdk";

const helloAction = new Action(
    ["hello_action.proto"],
    "js.hello.world.HelloService",
    {
        includeDirs: ["protos"],
        forwardHeaders: ["Authorization"],
    }
)

const Response = helloAction.lookupType("js.hello.world.Response");

helloAction.setCommandHandlers({
    HelloAction: (request, context) => context.write(Response.create({ message: "Hello Lightbend2" }))
})

new AkkaServerless().addComponent(helloAction).start();
