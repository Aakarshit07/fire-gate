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

## Challenges Faced:

# Firebase Implementation:
- New to Firebase, I faced challenges in its implementation.
- Solution: Thoroughly studied Firebase documentation, enabling successful integration into the Fire Gate project.

# Data Sending and Validation:
- Sending data to Firebase and validating Ether wallet addresses presented difficulties.
- Solution: Leveraged Firebase SDK for efficient data transactions and implemented robust validation using the ethers library.

# Learning Curve:
- The learning curve associated with new technologies posed an overarching challenge.
- Solution: Embraced a proactive learning mindset, turning challenges into opportunities for skill enhancement.

# These challenges were successfully overcome through dedicated learning, research, and a persistent problem-solving approach.

# Adding ethes wallet addresses for Demo
- 0x35aeed3aa9657abf8b847038bb591b51e1e4c69f
- 0xd5268a476aadd1a6729df5b3e5e8f2c1004139af
- 0x7f1502605a2f2cc01f9f4e7dd55e549954a8cd0c
- 0x6d9d2b30df394f17a5058aceb9a4d3446f1bc042
- 0x0548f59fee79f8832c299e01dca5c76f034f558e
