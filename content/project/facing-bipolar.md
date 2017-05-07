+++
title = "Facing Bipolar"
weight = 3

year = "2009"
org = "Digital Health"
suborg = "Technology"
capabilities = "HTML, CSS, JavaScript, ASP.net"

availability = "archive"
exturl = "https://web-beta.archive.org/web/20090308030155/http://www.facingbipolar.com:80/"

screen = "facing-bipolar"
screenalt = "Facing Bipolar content page"

[menu]
[menu.main]
parent = "project"
+++

FacingBipolar was an unbranded website for AstraZeneca, aimed at providing extensive and reliable information to patients diagnosed with bipolar disorder. The project kicked off in summer 2008 with a diverse team, encompassing account, marketing, creative, and technology departments. As the lead front-end developer on the project, I collaborated with our technology lead on the basic front-end assets and code standards for the website, and with our senior back-end developer on the template framework. The website launched in early spring 2009.

FacingBipolar won [an award](http://advertisingcompetition.org/winner.asp?eid=13594) in 2009 for outstanding achievement in web development under the Pharmaceuticals category.

Development was done in Visual Studio using ASP.net. The back-end developer built the template framework, and I broke out our components into reusable blocks, such as header, footer, and callouts. The MooTools library imported minimal JavaScript functionality, and [sIFR](https://en.wikipedia.org/wiki/Scalable_Inman_Flash_Replacement) provided custom fonts for page headlines.

One feature of the website was the inclusion of images designed to look like sticky notes and photos scattered across a desk. To accomplish this effect, the images were saved as high-quality PNG files that could support alpha-channel transparency, while HTML and CSS was written to allow the pullquotes to be read in the regular flow of content while also appearing slightly disorganized.

{{< code-example "pullquote photos" HTML CSS >}}

    {{< code-block "Screenshot" >}}
        {{< example src="facingbipolar-pullquote" alt="Screenshot of pullquotes on FacingBipolar's website" >}}
    {{< /code-block >}}
    
    {{% code-block "HTML" %}}
```html
<div class="photos">
  <img src="[SRC]" width="305" height="220" alt="Photo of: Girl at a computer desk">
  <img src="[SRC]" width="180" height="170" alt="Sometimes, I don't leave my apartment, answer the phone, or check my e-mail for days.">
</div>
```
    {{% /code-block %}}
    
    {{% code-block "CSS" %}}
```css
div#content div.photos {
  position: relative; }
div#content div.photos img {
  display: inline;
  position: relative;
  float: right;
  margin: 1em -125px 0 1em; }
div#content div.photos img + img {
  clear: right;
  margin: -97px -111px 0 1em; }
```
    {{% /code-block %}}

{{< /code-example >}}