<svelte:head>
	<title>FormValidation • Recaptcha plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Recaptcha plugin</h1>
    <h2 class="f4 fw4 tc">Shows and validates a Google reCAPTCHA v2</h2>

    <Tip>Use the <a href="/guide/plugins/recaptcha3" class="blue dim link">Recaptcha3</a> plugin if you are using Google reCAPTCHA v3</Tip>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">To use it, you need to register a site and secret keys at <a href="https://www.google.com/recaptcha/admin" class="blue dim link">https://www.google.com/recaptcha/admin</a>.</p>
        <p class="lh-copy">The following piece of code is the starting point to use the Recaptcha plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...

        <!-- Prepare a container to show the captcha -->
        <div id="captchaContainer"></div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Recaptcha.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                ...,
                recaptcha: new FormValidation.plugins.Recaptcha({
                    element: 'captchaContainer',
                    language: ...,
                    message: ...,
                    siteKey: ...,
                    theme: ...,
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">The sample code above assumes that the FormValidation files are placed inside the <code>vendors</code> directory. You might need to change the path depending on where you place them on the server.</p>
    </section>

    <section class="mv5">
        <Heading>Options</Heading>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Option</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>backendVerificationUrl</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The URL of your back-end that verifies the captcha via reCAPTCHA API</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>badge</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">The position of invisible reCAPTCHA. It can be one of</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>bottomright</code> (the default value)</li>
                        <li><code>bottomleft</code></li>
                        <li><code>inline</code></li>
                    </ul>
                    <p class="lh-copy">Use this option along with <code>size: 'invisible'</code> for <a href="/guide/plugins/recaptcha/#invisible-re-captcha" class="blue dim link">invisible reCAPTCHA</a></p>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>element</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The ID of element showing the captcha</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>language</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The <a href="https://developers.google.com/recaptcha/docs/language" class="blue dim link">language code</a> defined by reCAPTCHA</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The invalid message that will be shown in case the captcha is not valid</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>siteKey</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The site key provided by Google</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>size</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">The size of reCAPTCHA widget. It can be one of</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>normal</code> (the default value)</li>
                        <li><code>compact</code></li>
                        <li><code>invisible</code></li>
                    </ul>
                    <p class="lh-copy">The first two options are available for the <a href="/guide/plugins/recaptcha/#re-captcha-widget" class="blue dim link">reCAPTCHA widget</a>. The last one has to be used if you want to use <a href="/guide/plugins/recaptcha/#invisible-re-captcha" class="blue dim link">invisible reCAPTCHA</a>.</p>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>theme</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">The theme name provided by Google. It can be one of</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>light</code> (the default value)</li>
                        <li><code>dark</code></li>
                    </ul>
                </td>
            </tr>
        </table>
    </section>
    
    <section class="mv5">
        <Heading>reCAPTCHA widget</Heading>
        <p class="lh-copy">The following form shows a <a href="https://developers.google.com/recaptcha/docs/display" class="blue dim link">reCAPTCHA widget</a>.</p>
        <Demo prefix="/guide/plugins/recaptcha/widget" frameworks={['tachyons']} />
    </section>
    
    <section class="mv5">
        <Heading>Invisible reCAPTCHA</Heading>
        <p class="lh-copy">The following form shows an <a href="https://developers.google.com/recaptcha/docs/invisible" class="blue dim link">invisible reCAPTCHA</a>. In order to use it properly, remember to set the <code>size: 'invisible'</code> option.</p>
        <Demo prefix="/guide/plugins/recaptcha/invisible" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Back-end verification</Heading>
        <p class="lh-copy">If you want to take more steps of checking if the visitor on your site isn't a robot, then let's verify the captcha on the back-end side.</p>
        <p class="lh-copy">You need to point the <code>backendVerificationUrl</code> option to your back-end URL:</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            ...
        },
        plugins: {
            ...
            recaptcha: new FormValidation.plugins.Recaptcha({
                backendVerificationUrl: '/path/to/your/back-end/',
            }),
        },
    }
);
`} />
        <p class="lh-copy">When that option is enabled, the plugin will send an Ajax request with the value for <code>g-recaptcha-response</code> parameter. With the value of captcha and the reCAPTCHA secret key, you can connect to
            <a href="https://developers.google.com/recaptcha/docs/verify#api-request" class="blue dim link">reCAPTCGA verification URL</a> to verify the captcha.</p>
        <p class="lh-copy">In order to inform user in case the captcha is valid or invalid, the back-end has to return a JSON encoded version of</p>
<SampleCode lang="javascript" code={`
{
    "success": "true"
}
// or
{
    "success": "false"
}
`} />
        <p class="lh-copy">The following code demonstrates how to do it in PHP, but you can do it with your favorite language.</p>
<SampleCode lang="php" code={`
&lt;?php
// Replace it with your reCAPTCHA secret key
$secretKey = '...';

// See https://developers.google.com/recaptcha/docs/verify#api-request
$fields = array(
    'secret'   => $secretKey,
    'response' => $_POST['g-recaptcha-response']
);

$postVars = '';
$sep = '';
foreach ($fields as $key => $value) {
    $postVars .= $sep . urlencode($key) . '=' . urlencode($value);
    $sep = '&';
}

$ch = curl_init();

curl_setopt($ch,CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
curl_setopt($ch,CURLOPT_POST, count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS, $postVars);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);

curl_close($ch);

header('Content-Type: application/json');
echo $result;
`} />
    </section>
    
    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.5.0: Hide the icon for the invisible reCAPTCHA.</li>
            <li>v1.4.0: In the previous version, the Recaptcha plugin doesn't hide the error message and error icon when user click the captcha checkbox.
                The error icon disappears when the captcha is expired. This version fixes that.</li>
            <li>v1.1.0:
                <ul class="pa0 ma0 ml3 lh-copy">
                    <li>Removed the <code>timeout</code> option. The captcha expiration will be handled by the plugin automatically</li>
                    <li>Removed unused <code>stoken</code> option</li>
                    <li>Added <code>backendVerificationUrl</code> option to support back-end verification</li>
                    <li>Supported <a href="https://developers.google.com/recaptcha/docs/invisible" class="blue dim link">invisible reCAPTCHA</a></li>
                </ul>
            </li>
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/pure">Pure plugin</PrevButton>
            <NextButton target="/guide/plugins/recaptcha3">Recaptcha3 plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>
