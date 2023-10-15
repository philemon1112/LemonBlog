
# Lemon's Blog
A simple blog site with CRUD functionalities, made with nextjs 13 , clerk for authentication, MongoDb for database

### Showcase

#### Home page

![Home page](https://github.com/philemon1112/LemonBlog/blob/main/public/Assets/Img/home.png)

#### Blogs page
![Blogs page](https://github.com/philemon1112/LemonBlog/blob/main/public/Assets/Img/blogs.png)

#### Blogs details page
![blog details page](https://github.com/philemon1112/LemonBlog/blob/main/public/Assets/Img/blogDetails.png)
#### User Accounts page
![user accounts](https://github.com/philemon1112/LemonBlog/blob/main/public/Assets/Img/accounts.png)
## Project Description
## Project Structure

```bash


├── app/
    ├── (auth)/
    ├── (root)/
    ├── api/
├── components/
    ├── Cards/
    ├── Forms/
    ├── Hero/
    ├── Layout/
    ├── Sections/
    ├── Shared/
├── lib/
    ├── actions/
    ├── models/
├── public/
    ├── Asets/
        ├── Img/
        ├── Svg/


```

[`app/(root)`]("app/(root)")

- This contain the main pages route and pages for the application apart from the auth pages , It includes a home page `/`, all blogs page `/blogs` , blog details page `/blogs/[]`, user account page `/account` and authors profile page `/account/[]`, it also consist of the creat `/new`, edit `/edit` and delete pages `/delete` for post

[`app/(auth)`]("app/(auth)")
- This contains pages which require user authentication it consist of the sign in page `/sign-in`, sign up page `sign-up` and the onboarding screen `/onboarding`

[`app/api`]("app/(api)")
- This contains the uploadthing api , and a custom api to fetch for blog posts

[`public/Assets`]("./public/Assets")

- Contains images and some SVG icons used in the project

[`components`]("/components")

- Contains reusable components such as cards, forms, Layout, various page sections, and shared components

[`lib/`]("lib")

- This is the lib folder of the application it contains the server actions to `(MONGODB)` database in the `actions` route, it also has mongoDb projects Schema's in the `models` and some other files containing utility functions, mongoDB connection and uploadthing react-hooks


## How to setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Below is the `.env.local` file that is found in the root directory of the project. All this must be provided for the application to function well

``` bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URL =

```

## Learn More

This project makes use of a list of npm packages. They can be installed during the process of setting up the application using `npm install`

- `Uploadthing` - for Image upload
- `momentjs` - For date/time conversion to a more readable and understandable format
- `clerk` - For easy user authentication management

- `axios` - For making external api calls / request

- `sonner` - For displaying in-app toast notifications 

- `mongoose` -  For enforcing a specific schema at the application layer

The nextjs project also came with already installed packages such as `next`, `react` and `react-dom`.



