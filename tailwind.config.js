/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
     'sans': ['ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" , "Noto Color Emoji" ],
     'serif': ['Arial','ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
     'Monaco':['Monaco'],
     'mono' : ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
     'display': ['Oswald'],
     'body': ['Open Sans'],
     'libre': ['Libre Baskerville', 'Roboto', 'Cambria']
    },

// Other configuration options...

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',

      },
      
    },

    darkMode: 'selector'
   
  },

  content: [
   './pages/*.{html,js}'
   
  ]
  
}; 