# [Fire Gate](https://fire-gate-aakarshit-choudharys-projects.vercel.app/) [Live](https://fire-gate-aakarshit-choudharys-projects.vercel.app/)
### Setup instruction

1. Clone the Project

```
    git clone https://github.com/Aakarshit07/fire-gate.git
```
2. Move into the directory

```
    cd fire-gate
```

3. install dependencies

```
    npm install
```

4. run the server

```
    npm run dev
```


### Setup instructions for  tailwind

[Tailwind official instruction Doc](https://tailwindcss.com/docs/installation)

1. Install Tailwind CSS

```
   npm install -D tailwindcss postcss autoprefixer
```

2. Create configure file your template paths

```
    npx tailwindcss init
```

3. Add file extensions to tailwind Configure file in contens property

```
    "./src/**/*.{html,js, jsx, ts, tsx}", "./index.html"
```

4. Add the tailwind firectives at the top of the `index.css`

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding plugins and dependencies

```
    npm install firebase react-router-dom react-icons
```
