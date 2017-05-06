+++
title = "Georgetown University"
weight = 2

year = "2015"
org = "Georgetown University"
suborg = "Web Services"
capabilities = "HTML, CSS, jQuery, Drupal"

availability = "online"
exturl = "https://www.georgetown.edu/"

screen = "georgetown"
screenalt = "Georgetown University content page"
+++

The core codebase for nearly all Georgetown University websites is maintained by the Web Services team, and consists of a Drupal multisite environment. Alternatively, the main university website, referred to as its Top Tier, lives in a separate repository, although it shares a similar codebase and base theme as other university websites. In late 2014, the Office of Communications decided to reskin the Top Tier, keeping the existing Drupal codebase.

The project kicked off in early 2015, just after the return from winter break. As the senior web front-end developer on the project, I collaborated mainly with the digital strategist on the basic redesign for the new theme. The updated website launched in July 2015.

Since the codebase would not be updated or rearchitectured, we were limited in what we could do for development on the new theme. One constraint was the site's navigation; the specifications stated one instance of the full menu output through Drupal, and inclusion of it in full or in parts elsewhere on the site through JavaScript. Another requirement was access to the full navigation through a "hamburger" menu button in the global header.

I used JavaScript, mostly jQuery, to add functionality that -- if JavaScript is enabled on the client-side -- hides the full menu but displays it as an overlay when the menu button in the header is clicked. The full menu needed to be docked to the top of the window, beneath the global header, no matter where the user scrolled on the page. The full menu also needed to be compact, i.e. only show the top level items unless the arrow is clicked to expand that section; however, if the user was already on a page deeper in the site's structure, that level would be visually represented in the full menu.

{{< code-example "full navigation menu" JavaScript HTML >}}

    {{< code-block "Screenshot" >}}
        {{< example src="georgetown-menu" alt="Screenshot of full navigation menu on Georgetown University's website" >}}
    {{< /code-block >}}
    
    {{% code-block "JavaScript" %}}
```javascript
// hide/show the full menu
$('#button-menu').click(function() {
  if( !$('body').hasClass('menu-open') ) {
    var offsetTop = $(window).scrollTop();
    $('body').css('top', '-'+offsetTop+'px');
  } else {
    var offsetTop = -1 * parseInt( $('body').css('top') );
    $('body').removeAttr('style');
    $('html, body')
      .delay( 0.000001 )
      .animate(
        { scrollTop: offsetTop }, 0.000001, 'linear'
      );
  }
  $('body').toggleClass('menu-open');
  return false;
});
// expandable subnavs
var fullnavMain = '#menu-full li.expanded';
$(fullnavMain).find('> a').append('<span>&#9658;</span>');
$(fullnavMain).find('> a.active-trail span').addClass('open');
$(fullnavMain).find('> a span').live('click', function() {
  $(this).toggleClass('open').parent('a').next('ul.menu').slideToggle();
  return false;
});
```
    {{% /code-block %}}
    
    {{% code-block "HTML" %}}
```html
<div id="menu-full">
  <nav id="block-menu" class="block-menu-block block-region-menu-full">
    <div class="menu-block-wrapper">
      <ul class="menu">
        <li class="expanded menu-depth-1 menu-mlid-[ID]">
          <a href="[URL]">[MENU ITEM]</a>
          <ul class="menu">
            <li class="expanded menu-depth-1 menu-mlid-[ID]">
              <a href="[URL]">[MENU ITEM]</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</div>
```
    {{% /code-block %}}

{{< /code-example >}}