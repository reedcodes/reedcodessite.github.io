+++
title = "McCourt School of Public Policy"
weight = 1

year = "2016"
org = "Georgetown University"
suborg = "Web Services"
capabilities = "HTML, CSS, Bootstrap, jQuery, Drupal"

availability = "online"
exturl = "https://mccourt.georgetown.edu/"

screen = "mccourt"
screenalt = "McCourt School of Public Policy landing page"
+++

The core codebase for nearly all Georgetown University websites is maintained by the Web Services team, and consists of a Drupal multisite environment. 

When end users and content editors requested greater flexibility for layouts and components on their websites, Web Services determined that additional themes were needed. The McCourt School of Public Policy, one of several major schools under Georgetown University, volunteered as the first group to use the new theme, and worked closely with Web Services on conceptualizing new features, styles, layouts, and functionality.

The project kicked off in early 2016, just after the return from winter break. As the senior web front-end developer on the project, I collaborated first with our product manager on the basic framework for the new theme. The website launched with the new Whitehaven School theme in July 2016.

The organization for this theme's assets adopts the SMACSS methodology. While Bootstrap creates the base framework for the theme, the Sass files also rely on Compass mixins and functionality to extend the styles native to Bootstrap, creating additional components with original and creative styles.

For example, McCourt staff liked the look of [Bootstrap Image Overlay Cards](https://v4-alpha.getbootstrap.com/components/card/#image-overlays) but wanted the ability to change the position of the text inside the cards. In order to accomplish this, I added further styles to our base code so content editors could easily update their HTML snippets to select the position of the content inside the block.



{{< code-example "image overlay cards" SCSS HTML >}}

    {{< code-block "Screenshot" >}}
        {{< example src="mccourt-about" alt="Screenshot of image overlay cards on McCourt's website" >}}
    {{< /code-block >}}
    
    {{% code-block "SCSS" %}}
```scss
.card-img-overlay.position {
  @include display-flex;

  .pos {
    width: 100%;

    &.pos-left, &.pos-left .btn { text-align: left; }
    &.pos-center, &.pos-center .btn { text-align: center; }
    &.pos-right, &.pos-right .btn { text-align: right; }

    &.pos-top    { @include align-self(flex-start); }
    &.pos-middle { @include align-self(center); }
    &.pos-bottom { @include align-self(flex-end); }
  }
}
```
    {{% /code-block %}}
    
    {{% code-block "HTML" %}}
```html
<div class="card">
  <img class="card-img" alt="[ALT]" src="[SRC]" />
  <div class="card-img-overlay position">
    <div class="pos pos-top pos-left">
      <p class="card-text">[TEXT]</p>
      <a class="btn btn-primary" href="[URL]">[TEXT]</a>
    </div>
  </div>
</div>
```
    {{% /code-block %}}

{{< /code-example >}}