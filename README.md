# TRELLO 2.0 Clone in Next.js 13.4.4

>This project get from [Sonny Sangha](https://www.youtube.com/@SonnySangha) YouTube channel

>Project Link [Let’s build TRELLO 2.0 with REACT! (Next.js 13.4, GPT-4, Drag & Drop, Zustand, Appwrite Cloud, TS)](https://youtu.be/TI2AvfCj5oM)


- Next.js 13 has so many new features one of the new ones useRouter in come from `"next/navigation" ` do not use next.js 12 router here it will affect the code.

- also, use default ```loading.tsx``` file for loading.


## React Beautiful dnd

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) is the package used for drag and drop functionality.

- you install using this command ```npm install react-beautiful-dnd --save```

## Zustand (use for global store)

- [Zustand](https://www.npmjs.com/package/zustand) this is use mange globals store like redux and context in react


## Appwrite Cloud

- [Appwrite](https://appwrite.io/) is a backend platform for developing Web, Mobile, and Flutter applications

- you can install using this  ```npm install appwrite```

## Chat GPT

- [chat [GPT](https://platform.openai.com/docs/api-reference) use to get the summary of weather data.

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

## HeadlessUI

- [HeadlessUI](https://headlessui.com/) is Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.

```typescript
<Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
```

## React Avatar

- [react-avatar](https://www.npmjs.com/package/react-avatar) use for avatar image.

- this is very much help full when you use an avatar from a Facebook id and Google id like scenario.

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


