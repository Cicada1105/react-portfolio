
## Portfolio project for Josh Colvin written in ReactJS

### Requirements
---
- This project was connected to the locally run Laravel project found [here](https://github.com/Cicada1105/laravel-portfolio-cms)

### Project Notes
---
#### This project was created using the following versions of tools:
* Node - v16.13.1
* NPM - v8.16.0
#### Local Laravel project usage notes
MAMP v6.6 was used with the following server versions
* PHP - v7.4.21
* MySQL - v5.7.34
### Setup
---
**If running local Laravel project:**
* Add '${LARAVEL_URL}' before fetch path and remove ".json" extension for following files:
	* src/components/pgs/experience/index.jsx
		* \`/employment.json\` becomes \`${LARAVEL_URL}/employment\`
		* \`/education.json\` becomes \`${LARAVEL_URL}/education\`
	* src/components/pgs/projects/index.jsx
		* \`/projects.json\` becomes \`${LARAVEL_URL}/projects\`
* Read and uncomment the respective line of code under the employment fetch call that adjusts for the slight variant in the Laravel API response

**Running the Laravel project locally:**
* Install MAMP
* Start MAMP server
* Move into MAMP's htdocs directory
* Run the following scripts
```bash
git clone https://github.com/Cicada1105/laravel-portfolio-cms
cd laravel-portfolio
composer install
php artisan migrate:refresh --seed
php artisan serve
```

### Front-end Compiling
---
*Note: Can be run as is without local Laravel project*
```bash
git clone https://github.com/Cicada1105/react-portfolio.git
cd react-portfolio
npm install 
```

### Files & Directories
---
*Note: Local JSON files follow the same structure (unless stated otherwise under Setup section) as the Laravel API. Local files used as they are an accurate representation of my info as the database is not hosted live*
public/
&nbsp;&nbsp;&nbsp; projects.json - List of my projects
&nbsp;&nbsp;&nbsp; education.json - List of my previously attended institutions
&nbsp;&nbsp;&nbsp; employment.json - List of my previous places of employment

### Hacks/Kludges
---
Multiple re-renders in the fetch request components have been have been fixed and limited to only making the amount needed. 

If using the local Laravel project, and in the case where too many requests are made, stop the server (or open new terminal in same directory as the running server) and run the following code before starting the server again:

`php artisan cache:clear`