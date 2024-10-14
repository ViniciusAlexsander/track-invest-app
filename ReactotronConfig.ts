import Reactotron from "reactotron-react-native";

const tron = Reactotron.configure({
  name: "React Native Demo",
})
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    // networking: {
    //   // optionally, you can turn it off with false.
    //   ignoreUrls: false,
    // },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();

console.tron = tron;
