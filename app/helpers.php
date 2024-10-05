<?php

if (! function_exists('asset_path')) {
    /**
     * Get the path to a versioned Mix file.
     *
     * @param  string  $path
     * @param  string  $manifestDirectory
     * @return \Illuminate\Support\HtmlString|string
     *
     * @throws \Exception
     */
    function asset_path($path, $manifestDirectory = '')
    {
        $mixPath = mix($path, $manifestDirectory);

//        $cdnUrl  = 'https://cdn1.mockupgen.com';
        $cdnUrl  = config('app.CF_URL');
        $env     = config('app.env');

        // Reference CDN assets only in production or staging environemnt.
        // In other environments, we should reference locally built assets.
        if ($cdnUrl && ($env === 'production' || $env === 'staging')) {
            $mixPath = $cdnUrl . $mixPath;
        }

        return $mixPath;
    }
}


if (! function_exists('vite_asset')) {
    /**
     * Get the path to a versioned Vite asset.
     *
     * @param  string  $path
     * @return string
     */
    function vite_asset($path)
    {
        $manifestPath = public_path('build/manifest.json');

        if (!file_exists($manifestPath)) {
            throw new Exception('The Vite manifest file does not exist.');
        }

        $manifest = json_decode(file_get_contents($manifestPath), true);

        if (!isset($manifest[$path])) {
            throw new Exception("Unable to find asset in manifest: {$path}");
        }

        return asset('build/' . $manifest[$path]['file']);
    }
}
