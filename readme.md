**<h1>AptosForo Frontend</h1>**

Follow these steps to deploy the AptosForo frontend on your local environment:

### 1. Clone the Repository
First, clone the repository to your local machine and navigate to the project directory.

```bash
git clone https://github.com/0xblockbard/aptos-aptosforo-frontend
cd aptos-aptosforo-frontend
```

### 2. Install Dependencies
Install all necessary PHP and Node.js dependencies using Composer and NPM.

```bash
composer install
npm install
```

### 3. Run the Development Server
You have two options for running a Laravel development server:

Using Laravel's Built-In Server: Start the application with the built-in server:

```bash
php artisan serve
```
This will run your application at http://localhost:8000.

Using Laravel Valet (for macOS users): Link the project to Valet and open it in your browser:

```bash
valet link
valet open
```
This will create a local domain, such as http://aptos-aptosforo-frontend.test.

### 4. Add to env

```
VITE_APP_NETWORK="testnet"
VITE_MODULE_ADDRESS="YOUR_MODULE_ADDRESS"
IS_DEV="true"
```

### 5. Build Assets

Run the following command to build assets for development:

```bash
yarn build
```