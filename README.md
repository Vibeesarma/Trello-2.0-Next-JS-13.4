# TRELLO 2.0 Clone in Next.js 13.4.4

>This project get from [Sonny Sangha](https://www.youtube.com/@SonnySangha) YouTube channel

>Project Link [Let’s build TRELLO 2.0 with REACT! (Next.js 13.4, GPT-4, Drag & Drop, Zustand, Appwrite Cloud, TS)](https://youtu.be/TI2AvfCj5oM)


- Next.js 13 has so many new features one of the new ones useRouter in come from `"next/navigation" ` do not use next.js 12 router here it will affect the code.

- also,use default ```loading.tsx``` file for loading.


## DnD

## Zustand (use for global store)


## Appwrite Cloud



## Chat GPT

- [chat GPT](https://platform.openai.com/docs/api-reference) use for get the summary of weather data.

- you can use chat GPT 3.5 here.

- you want to create an openAI instance using the below code,

```typescript
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;

```

## React Avatar

- [react-avator](https://www.npmjs.com/package/react-avatar) use for avator image.

- this is very much help full when you use avatar from Facebook id and google id like scenario.

- examples 

  ```
<Avatar googleId="118096717852922241760" size="100" round={true} />
<Avatar facebookId="100008343750912" size="150" />
<Avatar githubHandle="sitebase" size={150} round="20px" />
<Avatar vkontakteId="1" size="150" />
<Avatar skypeId="sitebase" size="200" />
<Avatar twitterHandle="sitebase" size="40" />
<Avatar name="Wim Mostmans" size="150" />
<Avatar name="Wim Mostmans" size="150" textSizeRatio={1.75} />
<Avatar value="86%" size="40" />
<Avatar size="100" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
<Avatar name="Wim Mostmans" unstyled={true} />
  ```



> Thanks for [Sonny Sangha](https://www.youtube.com/@SonnySangha)


