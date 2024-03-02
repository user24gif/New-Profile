/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        30: "30px",
        1:"10px",
        2:"20px",
        3:"30px",
        4:"40px",
        5:"50px",
        6:"60px",
        7:"70px",
        8:"80px",
        9:"90px",
        10:"100px",
        11:"110px",
        12:"120px",
        "10px": "10px",
        "70vh": "89vh",
        "496px": "496px",
        "296px":"296px",
        "60px": "60px",
      },
      fontFamily: {
        'sans': ['inter', 'Arial', 'sans-serif'],
      },
      backgroundColor: {
        "studio-white": "rgba(232, 229, 228, 0.5)",
      },
      borderRadius: {
        100: "100px",
      },
      lineHeight: {
        40:"52px",
        92:"92px",
        86: "86px",
        44: "44px",
      },
      
      backgroundImage: {
        Aboutimage:"url('https://images.pexels.com/photos/8354525/pexels-photo-8354525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        
        Spotify: "url('https://storage.googleapis.com/pr-newsroom-wp/1/2023/01/Spotify_Logo_RGB_White-1.png')",
        correlated:
          "url('https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024')",
        "channel-5":
          "url('https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024')",
        "ronald-abram":
          "url('https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024')",
        propeller:
          "url('https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024')",
        schuh:
          "url('https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024')",
        paperstreet:
          "url('https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg')",
        "oh-supply":
          "url('https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024')",
        monokel:
          "url('https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024')",
        lawtrades:
          "url('https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024')",
        baselworld:
          "url('https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024')",
        nycb: "url('https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024')",
        asterik: "url('./src/assets/asterik.png')",
      },
      maxWidth: {
        "1400px": "1400px",
      },
      minWidth: {
        "650px": "600px",
        "450px": "450px",
      },
      colors: {
        "oh-gray": "#7f7f7f",
        "Black": "#000",
        "Start": "#ff00cc",
        "End": "#333399",
        "Accent-Green1": "#15B79E",
        "Accent-Green2": "#0E9384",
        "Accent-Green3": "#107569",
      },
    },
  },
  plugins: [],
};
