# meta_frontend
meta_frontend is a Vue.js frontend application responisble for showing therapists profiles with information received from backend API<br/>
meta_backend: https://github.com/Rainhunter13/meta_backend

## Project structure:
<pre>
.                             
├── public                
    ├── favicon.ico                # favicon image       
    ├── index.html                 # main html        
    └── styles.css                 # styles for index.html        
├── src                            # app files
    ├── assets/                    # static files      
    ├── components                 # Vue components (except whole page components)
        ├── TherapistInfo.vue      # Vue for therapist profile information
        └── TherapistPhoto.vue     # Vue for therapist profile photo           
    ├── router                     # router related files
        └── index.js               # VueRouter
    ├── services                   # app services
        └── therapist_services     # service for receiving therapist info from backend API
    ├── views                      # Vue components representing a page
        ├── Home.vue               # Home page              
        └── Therapist.vue          # Therapist profile page
    ├── App.vue                    # main page      
    └── main.js                    # main javascript              
├── .gitignore                     # .gitignore file                 
├── babel.config.js                # project config file                     
├── package.json                   # project config file
├── package-lock.json              # project config file
└── README.md                      # <-- you are here
</pre>      

## How to run:

0. Setup and run the backend application - refer to https://github.com/Rainhunter13/meta_backend

1. Install Node.js, Vue.js

2. Clone the repository:
```
git clone https://github.com/Rainhunter13/meta_frontend
```

3. Setup project:
```
npm install
```

4. Run the app:
```
npm run serve
```

## Usage:

After setting and running the project, web app is available at:
- http://localhost:8080/#/ -> Home page -> shows the list of all therapists along with theird ids, names and photo_urls
- http://localhost:8080/#/therapist/{id} -> Therapist Profile page -> shows the profile of the therapist specified by {id}

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
