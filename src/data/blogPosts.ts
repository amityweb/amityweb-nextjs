/*----------------------------------------
Blog posts data - All blog content imported from WordPress
----------------------------------------*/

export interface BlogPost
{
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    image?: string;
    category?: string;
}

/*----------------------------------------
All blog posts (newest first)
----------------------------------------*/
export const blogPosts: BlogPost[] = [
    {
        slug: 'amitys-sister-web-design-company-has-launched-in-newport',
        title: 'Amity’s sister web design company has launched in Newport',
        excerpt: 'Amity is pleased to announce it\'s sister web design company has launched in Newport. Nettl will design & build, host & support and digitally market websites for customers in and around Newport, South Wales, using Amity as the technical backend. Nettl will also offer design & print material for marketing & exhibitions.',
        content: `<img class="alignnone size-full wp-image-636" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/nettl.png" alt="" width="611" height="308" />

Amity is pleased to announce it's sister web design company has launched in Newport!

Nettl of Newport will provide much the same website design services as Amity but allows us to operate better in and around Newport, and with the added benefit of offering print and exhibition material too. Partnering with Nettl allows us to access Nettl's wealth of material for print, marketing and exhibitions including web development support and tools. The Nettl of Newport service is ideal to supply a high standard websites to business, whilst Amity also continue to provide in and around the Cardiff area, and include a more bespoke design and development service, and the technical backend to Nettl.`,
        date: '2017-11-22',
        category: 'Amity News'
    },
    {
        slug: 'do-you-remarket-to-your-website-visitors-if-not-why-not',
        title: 'Do you remarket to your website visitors? If not, why not?',
        excerpt: 'Did you know that approximately 96% of people leave a website without taking the action the website owner would like them to complete? Whether it’s buying a product, signing up to a mailing list or requesting a callback, the vast majority of people visiting your site do not do it!',
        content: `<p class="p2"><span class="s1"><em>Did you know that approximately 96% of people</em></span><span class="s2"><em><sup></sup></em></span><span class="s1"><em> leave a website without taking the action the website owner would like them to complete? Whether it&rsquo;s buying a product, signing up to a mailing list or requesting a callback, the vast majority of people visiting your site do not do it! However, just because they don&rsquo;t do it on that occasion, doesn&rsquo;t mean they never will, and the wonders of remarketing strategies means you get a second, a third, a fourth chance to make that all-important impression&hellip;</em></span></p>
<p class="p2"><span class="s1">Remarketing, also known as retargeting or remessaging, is a form of pay-per-click marketing, through which you can display banner adverts to people who have already visited your website and performed a particular action. Perhaps you want to target people who added a product to their basket but never got as far as the checkout? Maybe you&rsquo;d like to charm the people who looked at your blog but who didn&rsquo;t sign up for updates? Do you want to win over the users who viewed your pricing information without making an enquiry? Your specifically targeted banners will entice and encourage these people to revisit your website, increasing the chances of them completing your desired action.</span></p>
<h2 class="p2"><span class="s1"><strong>How does remarketing work?</strong></span></h2>
<p class="p2"><span class="s1">Targeting previous website visitors in this way involves dropping a tracking cookie on their browser. You can then specify how many days following their visit to your website they will be shown your remarketing adverts, known as your Audience Membership Duration. Research shows that by showing adverts on other sites visited by those users, you can typically reach 84% of your audience within a month.</span></p>
<h2 class="p2"><span class="s1"><strong>How do I get started?</strong></span></h2>
<p class="p2"><span class="s1">You don&rsquo;t need any special software or tools to get started with remarketing. It can be done using the same <a href="https://www.google.co.uk/ads/displaynetwork/" target="_blank" rel="noopener noreferrer"><span class="s3">Google Display Network</span></a> you&rsquo;re already using for AdWords and other PPC marketing. You&rsquo;ll need to define an audience list of people you want to target, which may include existing customers, users who viewed a particular page or those who abandoned a shopping cart or online form. When creating your ads, you have a choice of 14 different display ad formats in different shapes and sizes, and it&rsquo;s advisable to create a diverse range of advert in order to increase the chances of it being displayed in a good position.</span></p>
<h2 class="p2"><span class="s1"><strong>What should my adverts look like?</strong></span></h2>
<p class="p2"><span class="s1">Google calculates the cost-per-click for your adverts based on your click through rate using a Quality Score algorithm. Ads with the highest CTR will have a lower cost-per-click, and so &ndash; to state the obvious &ndash; it makes sense to create ads that people will want to click on. You could offer an incentive such as a % discount to users who return to your site to complete the purchase they abandoned, or perhaps advertise a sale or great offer you&rsquo;re currently running. Image based ads perform far better than text ones, so spending a little time designing a winning advert is definitely a worthwhile investment.</span></p>
<h2 class="p2"><span class="s1"><strong>Is remarketing worth the effort?</strong></span></h2>
<p class="p2"><span class="s1">If you&rsquo;re already doing targeted PPC anyway, remarketing takes no more time and effort to set up, and can have some great results for your business. From increased brand visibility to a higher conversion rate on your existing traffic, you can improve your customer retention and gain more sales through targeting people you already know are interested &ndash; why wouldn&rsquo;t you want these benefits?!&nbsp;</span></p>
<p class="p2"><span class="s1">For more information, here&rsquo;s a really detailed article by <a href="https://blog.hubspot.com/marketing/design-content-remarketing-campaigns#sm.000000a4jzs5gvdh7yd4un7w49zxj" target="_blank" rel="noopener noreferrer"><span class="s3">Hubspot</span></a> examining specific results of remarketing strategies and how you can make them work for you. For a more concise piece, this post from <a href="http://www.bluefountainmedia.com/blog/5-lists-to-get-started-with-remarketing/" target="_blank" rel="noopener noreferrer"><span class="s3">Blue Fountain Media</span></a> contains key facts and tips for a successful campaign.</span></p>`,
        date: '2017-02-14',
        category: 'Advice'
    },
    {
        slug: '5-things-every-website-should-do-but-most-dont',
        title: '5 Things Every Website Should Do… But Most Don’t',
        excerpt: 'When did you last check the speed of your website? According to Google’s guide for webmasters, a good eCommerce website should load fully in under 2 seconds...',
        content: `<h2>1 – Load Quickly</h2>
When did you last check the speed of your website? According to Google’s guide for webmasters, a good ecommerce website should load fully in under 2 seconds - much longer than that and users become impatient, and you risk them leaving your site before they’ve even seen it - This particularly important for websites that have lots of mobile visitors. If you’re not happy with the loading speed of your website, there are lots of things you can do to improve it. These are just a few ideas to get you started:
<ul>
 	<li>Check your hosting - ensure your host offers a good speed and space for your needs</li>
 	<li>Optimise images - reduce the file size of your images without losing quality using a compression plugin</li>
 	<li>Reduce your redirects - make sure your site automatically loads the correct version of every page without redirecting or broken links</li>
 	<li>Prioritise content ‘above the fold’ - the part of the page that the user sees first without scrolling should load quickly and be engaging and compelling. Ensure your website code loads this content first before sidebars, menus and non-essential images.</li>
</ul>
Google make it easy to check your websites load speed using Googles own speed test tool - Simply add your URL and Google will tell you how well your website loads and highlights issues that need to be corrected <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank" rel="noopener noreferrer">https://developers.google.com/speed/pagespeed/insights/</a>
<h2>2 – Have Unique Meta Data For Every Page</h2>
Meta data is used to describe what each page on your website contains, helping search engines decide whether the page is relevant enough to be displayed for particular search results. Your page title and page description meta tags are also what will show to users in their search results, and therefore have an influence on whether or not a user decides to click through and view your website - Here is an example of good meta data.

<img class="alignnone size-full wp-image-659" src="https://www.amityweb.co.uk/wp-content/uploads/2016/11/unique-meta-data.png" alt="" width="459" height="65" />

When writing your meta tags, you should make sure they are unique, optimised for keywords, and that your title and description read well, highlighting your key selling points and including a call to action for the user.
<h2>3 – Provide Clear User Instruction</h2>
Take a look at your site from the point of view of someone who has never seen it before, doesn’t know your business, and possibly is unfamiliar or inexperienced with browsing online. What’s obvious to you may not be so clear to somebody else!

Is it easy for your website visitors to find the information they need, place an order or navigate around your site? A website that doesn’t offer a good user experience will not convert well.

If you’re not sure whether the user experience on your site is good or not, you could conduct some tests or surveys with volunteers, and take action based on the results you get.
<h2>4 – Have HTML and XML Sitemaps</h2>
A sitemap is basically a list of all the pages on your website. An HTML sitemap is for human site users, while an XML sitemap is for search engines. It’s important to include both types in your website, as they can ensure that search engines index all pages and content on your site, even those that are buried deep within. A sitemap minimises the number of clicks it takes to go from one page to another, and helps people who are looking for something specific to find the content they need.

Here is an example of a good HTML sitemap, it clearly shows all of the links in the website <a href="http://www.apple.com/uk/sitemap/" target="_blank" rel="noopener noreferrer">http://www.apple.com/uk/sitemap/</a>

If you don’t currently have a sitemap, it’s very easy to create either manually or using an automatic generator; doing so will definitely have an impact on your rankings.
<h2>5 – Earn New External Links</h2>
Linking out to other websites encourages participation and contribution, and promotes engagement with your site. Providing the sites you link to are of good quality and are relevant for your users, you can turn your website into a valuable resource, and you may find you get other sites linking back to you in return. Outgoing links can also have a positive impact on your SEO - search engines have algorithms that consider the authority of the sites your site is associated with, and can boost your rankings accordingly.

<strong>Warning!</strong> – There are lots of websites like Fiverr &amp; People Per Hour offering cheap links. These links are seldom worth having and deliver very little SEO value - Avoid them!
<h3>We can Help.</h3>
If you would like help or further advice with any of the elements raised in this article, please contact us using our <a href="/contact-us">contact form</a> and we’ll get back to you within 24 hours.`,
        date: '2016-11-28',
        category: 'Advice'
    },
    {
        slug: 'social-media-is-it-right-for-me',
        title: 'Social Media – Is It Right For Me?',
        excerpt: 'If your business isn’t currently using social media, now is the time to consider why that is.',
        content: `<img class="alignnone size-full wp-image-637" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/social-media-right-for-me.jpg" alt="" width="610" height="451" />

If your business isn’t currently using social media, now is the time to consider why that is. These days, online presence is everything, and interacting with your customers in a variety of ways can win you valuable sales. Maintaining an effective social media campaign takes a bit of work, but many companies believe it to be worth the investment in time and effort. Here’s our summary of the main social media platforms, and things you should think about before deciding to sign up:
<h2>Facebook</h2>
Interacting with your customers via Facebook gives you the opportunity to share content , advice and opinions, entering into a conversation with people who are interested in your brand. You should make sure that your posts are interesting and original, and that you respond to any communication in a timely and professional manner, as it will be seen by a wider audience.
<h2>Twitter</h2>
Share short 140-character messages and links with followers, enabling you to send (and receive!) instant information about offers, products, news, or anything else you think your customers may be interested in. You need to ensure you tweet frequently enough to show that you’re current and up-to-date, but not so often that you become annoying – most companies find that 1-3 tweets per day is about right.
<h2>LinkedIn</h2>
This is a business networking site, a B2B social network, which is great for building new connections and generating sales leads. The more time you invest in making your LinkedIn profile relevant and engaging, and in interacting with other users, the better the results you’re likely to get from it. You can get by simply by creating a profile, but to really get noticed you need to regularly update your status, participate in discussion groups and even try out paid advertising.
<h2>Pinterest and Instagram</h2>
These are image-driven social networks, so are particularly useful and relevant for e-commerce and lifestyle products, and perhaps less so for industrial or commercial businesses. Using images to promote your brand allows you to be creative – even if you don’t have a visual product or service to market, you can find images which celebrate your company values, local events, and anything you think may be interest.

Using social media can be good for your business in a number of ways:
<ul>
 	<li>Customer Service and Insights: Your customers may contact you for support or with pre-sale queries, allowing your response to help boost the reputation of your brand. You can gain a valuable insight into who your customers are and how they feel about your business.</li>
 	<li>Increased Brand Visibility and Trust: Potential customers who see that you are on social media know that they have an easy way to get in touch, and that you’re approachable.</li>
 	<li>Promote Your Content and Drive Website Traffic: Being talked about and mentioned on social media shows that you have a popular brand, and that you have something worth sharing.</li>
</ul>
<h2>Why You May Choose NOT To Use Social Media:</h2>
Ultimately, Facebook, Twitter and any other social media platform can only be an effective tool for your business if you use it effectively. Done badly, infrequently, or half-heartedly, it can actually cause more harm than good. Nobody wants to click onto a company Facebook page only to find it hasn’t been updated for months, messages from customers haven’t been responded to, and all the offers you’re featuring have already ended. Once you commit to having a profile on a social networking site, you need to invest the time and attention needed to keep it current and interesting – if you can’t do that, it may be better not to have one, and definitely don’t link to an unmaintained profile from your website.
<h2>I Want To Give It A Go – What’s Next?</h2>
If you’re a complete beginner in the world of social media, it can be a bit daunting to know where to begin. Many companies select one of their younger employees to be a ‘social champion’, as they’re likely to already have a good understanding of how each channel should be used effectively.

Some companies outsource their social media, employing an agency or online marketing professional to keep their profiles alive. If you would like to explore this option please contact us at Amity and ask for Laurence who will be happy to discuss social media with you.`,
        date: '2016-11-08',
        category: 'Advice'
    },
    {
        slug: 'are-you-ready-for-a-digital-christmas',
        title: 'Are You Ready For A Digital Christmas?',
        excerpt: 'December is the perfect time to kick-start campaigns and refresh your marketing. Even if the nature of your business isn’t remotely festive, your customers will appreciate the goodwill of a seasonal offer to two, or simply a friendly ‘Merry Christmas’ message.',
        content: `<img class="alignnone size-full wp-image-635" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/blog-ready-for-christmas.jpg" alt="" width="610" height="361" />
<h2>Are You Ready For Christmas?</h2>
December is the perfect time to kick-start campaigns and refresh your marketing. Even if the nature of your business isn’t remotely festive, your customers will appreciate the goodwill of a seasonal offer to two, or simply a friendly ‘Merry Christmas’ message. You may not be feeling the yuletide spirit just yet, but many companies begin planning their Christmas campaigns as early as July in order to be well-prepared. If you haven’t given it a thought yet (after all, it’s still only October!) you’re not too late – here are some simple ways you can make the most of the Christmas hype with your marketing:
<h2>Decorate Your Website</h2>
At the very least you should make sure the Christmas opening hours for your phone lines and physical premises are shown on your website. A Christmas offer, and for e-commerce sites perhaps a multibuy offer or free postage, may attract those customers looking for a good deal. If you’re feeling creative, it’s also a nice idea to design a new banner or main image for your homepage with a festive theme. This shows that your website is current and well-maintained, and is something potential customers will appreciate.
<h2>Spread The Festive Cheer On Social Media</h2>
Run a festive campaign on your social media channels over Christmas to engage with your followers. If you plan your campaign now you’ll make sure you’re not stuck for ideas as you get closer to the big day, and you can make the most of scheduling facilities on many of the main social media platforms like Facebook, Twitter and Instagram. Make sure you include links to any seasonal offers you’re running, and encourage your followers to interact with you; sharing, commenting and liking to increase the reach of your posts.
<h2>Reach Out Via Email</h2>
Do you have an email list that gets neglected? Plenty of companies keep emails for their customers, but don’t run an effective or regular email campaign. Christmas is the perfect time to get back in touch, offering season’s greetings and letting customers know about new products or offers they may be interested in. Free tools like <a href="http://mailchimp.com/" target="_blank" rel="noopener noreferrer">Mailchimp</a> can help to make the email process quick and easy.
<h2>Invest In On-line Paid Advertising</h2>
A <a href="https://www.google.com/adwords/" target="_blank" rel="noopener noreferrer">Google AdWords</a> campaign is a good way to ensure your name and website link can get onto the first page of search results. This is ideal if you want to take part in the annual Christmas battle for website traffic and orders but your site doesn’t rank highly in organic listings. Maybe you invest heavily in advertising in this way all year round, or perhaps you’ve never tried it before, but either way, peak shopping season is a great time for it!
<h2>Time To Plan for 2017</h2>
If your company isn’t affected by Christmas at all, now is still a good time to make plans for the coming year. Whether you see it as making resolutions, goals or a to-do list, planning your offers, social media and email campaigns for 2017 well in advance will keep you on track and organised, as well as saving precious time in the coming months. Planning now for 2017 will help you to kick start the new year by putting your brand at the forefront of your customers minds.`,
        date: '2016-10-25',
        category: 'Advice'
    },
    {
        slug: 'top-characteristics-of-good-web-design-part-two',
        title: 'Top characteristics of good web design – Part two',
        excerpt: 'This blog will help you identify key indicators what makes good web design; e.g. the usability of your website.',
        content: `If you missed part one of our blog, ‘Top Characteristics of good web design’ then check it out <a href="/blog/top-characteristics-of-good-web-design">here</a>, we discussed these features below:
<ul>
 	<li>The importance of ensuring your website has clear purpose to your audience</li>
 	<li>How keeping navigation is simple as possible for your users</li>
 	<li>Why functionality is key in web design</li>
 	<li>Mobile-friendly websites – why they’re an integral part of the web design process</li>
 	<li>Why load times should be kept at a minimum</li>
</ul>
This blog will discuss various aspects of good web design that haven’t been mentioned yet:
<h2>Language</h2>
In most forms of written media, you write to the tone and language of your chosen target audience. When writing content on your website, web design is no different. You have to consider what sort of audience will be reading the content and whether it follows the same business ethos and values.

For example, if you were a law firm and your website had inappropriate or slang language within the content, how could your customers take you very seriously? With that level of profession; you would expect everything on the website to coincide with their practices and the nature of the business.

However, if you were a publishing brand like <a href="http://www.buzzfeed.co.uk/" target="_blank" rel="noopener noreferrer">Buzzfeed</a>, as you’re targeting a younger audience, the content fits and makes sense as its part of their branding image which is to be fun and engaging.

<img class="alignnone size-full wp-image-633" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/BuzzFeed_grab_1.jpg" alt="" width="1165" height="844" />
image courtesy of <a href="http://www.tbivision.com" target="_blank" rel="noopener noreferrer">www.tbivision.com</a>

&nbsp;
<h3>Usability of your website</h3>
The usability of your website can make a huge impact on whether a user will continue to use your site or not; therefore it is vitally important that you offer your users a website that is both functional and user-friendly. If you can’t offer a user-friendly website as part of your online service, it’s more likely that your bounce rate will be high.

When discussing the usability of your website, you have to consider those who suffer from disabilities that will use your website. You must follow strict guidelines in order to make your website fully accessible to all users; check out our blog; <a href="/blog/is-your-website-legal">‘Is your website legal’</a>, to ensure it passes.

Here are some quick pointers that will help your site become accessible to users:
<ul>
 	<li>The content on your pages should be both engaging and relatable to what your website offers, it should be of a high-quality</li>
 	<li>Your site should be easy to use and have a simple navigation tool in place</li>
 	<li>Alt images tags should be optimised (this is how Google identifies what the image is), this also helps with people who suffer to understand what the image entails.</li>
</ul>
<h3>Images</h3>
<a href="http://blog.hubspot.com/marketing/visual-content-marketing-strategy#sm.00017xkuzssilf5dsb02302tjpws6" target="_blank" rel="noopener noreferrer">“Content with relevant images gets 94% more views than content without relevant images”</a>

Websites have to be visually appealing too; in order to keep the user entertained and fulfilled. If you were too look at two websites, one with just text and the other website with both images &amp; text; you will certainly remember the website with images more as it would be more eye-catching than the previous one.

Try to avoid stock photos when adding imagery to your website, especially if you want to build relationships with your customers. It’s best to actually use images of your products/services or of your staff, as your customers can identify your business with a face to it; this makes your website more inviting and provides personal approach.

Infographics within a website have an even higher impact to users as they are <a href="http://blog.hubspot.com/marketing/visual-content-marketing-strategy#sm.00017xkuzssilf5dsb02302tjpws6" target="_blank" rel="noopener noreferrer">three times more likely to share it on social media</a>; they are an excellent form of content that can show facts/figures from your field along with simple but effective images to go with it.
<img class="alignnone size-full wp-image-634" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/recipe-gift-book_site.jpg" alt="" width="610" height="379" />
<h3>Call to action buttons</h3>
A unique button on your website that prompts your users to take part in a “specific action”, it can come in various ways, including getting your customers to sign up to your newsletter or a (CTA) as simple function as a ‘add to cart’ button. Call to actions buttons are an effective tool to persuade your users to take action in your products/services and this will hopefully generate more sales and traffic to your website.

<img class="alignnone size-full wp-image-642" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/ps4_1.png" alt="" width="941" height="412" />
image courtesy of <a href="http://www.topdesignmag.com" target="_blank" rel="noopener noreferrer">www.topdesignmag.com</a>
<h3>Structuring</h3>
When it comes to the structuring of your website, it’s extremely important that your pages have a familiar layout throughout. The usage of headings e.g. H1 (page title), H2 (sub-headings) and so forth, these are great for the fluidity of the content but vital for on-site optimisation. The call to action button as mentioned above should be easily identifiable for the user to perform the task, e.g. the landing page of the website.

Thanks for reading our blog about the top characteristics of good web design; we hope that we’ve helped you identify the key factors that should be implemented within a website. All of our web projects feature these characteristics and if you’d like to us to build your next website, give us a call on 02920886582 or <a class="contact-modal" title="Link to contact form" href="/contact-us">email us</a>.

&nbsp;`,
        date: '2016-09-02',
        category: 'Advice'
    },
    {
        slug: 'top-characteristics-of-good-web-design',
        title: 'Top characteristics of good web design',
        excerpt: 'When identifying what makes a website great, a lot of people will just look at how aesthetically pleasing it is for them.',
        content: `When identifying what makes a website great, a lot of people will just look at how aesthetically pleasing it is for them. The late Steve Jobs once quoted that,

<a href="http://www.quotationspage.com/quote/38348.html" target="_blank" rel="noopener noreferrer">“Design is not just what it looks like and feels like, Design is how it works”.</a>

This statement is very true as you’ve also got to consider how functional the website actually is too, as it will be your customers using it and the website has to serve them a clear purpose e.g. buy products online.

The idea of this blog is to show you what some of the characteristics are for a good website;
<h2>Purpose of the website</h2>
If a website is visually pleasing to the eye; but doesn’t have any real purpose to it, you’d expect it to have some disappointing metrics, in regards to the Analytics; e.g. low conversion rates, high bounce rates and a lack of time spent on the site too.

Good websites should first and foremost cater for their users, which is why you need to make sure the purpose of the website is clearly shown on the landing page and not hidden on any subpages.
<h3>Navigation</h3>
Navigation is an integral part of the web design process, one of the best ways to implement good navigation within a website is to simplify the number of clicks it would take the user to perform a certain task. A perfect example of this in action is on <a href="https://www.amazon.co.uk/" target="_blank" rel="noopener noreferrer">Amazon</a>, once you’ve registered your details on their site, you can simply buy products with one-click. This makes buying products online a lot of easier and through this Amazon has seen some tremendous profits from it.

<img class="alignnone size-full wp-image-641" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/oneclick_1.png" alt="" width="220" height="235" />
image courtesy of <a href="http://www.ipkitten.blogspot.com" target="_blank" rel="noopener noreferrer">www.ipkitten.blogspot.com</a>
<h3>Mobile-friendly</h3>
Optimising your website for mobile users is essential in the digital age that we now live in. Studies have shown that 83% of the number 1 results on Google SERPs (search engine results pages) are now mobile-friendly. There’s nothing worse when you visit a website and it hasn’t been optimised for mobile devices, e.g. having to pinch the screen to zoom in on the content. When a user views a website on their phone, it should have a user-friendly navigation system that is simple to use. You will certainly risk losing customers if your website hasn’t been designed responsively.

<img class="alignnone size-full wp-image-640" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/mobile_friendly_pic_1.jpg" alt="" width="610" height="318" />
image courtesy of <a href="http://www.businesscatalyst.com" target="_blank" rel="noopener noreferrer">www.businesscatalyst.com</a>
<h3>Load time at a minimum</h3>
If you've got a website new or old and it's not running to the speed that it requires to satisfy your customers then you have to consider, how does it affect your business?

Did you know that over 40% of people will abandon your website, if it takes more than 3 seconds to load (<a href="https://neilpatel.com/blog/loading-time/" target="_blank" rel="noopener noreferrer"><strong>Kissmetrics</strong></a>). If a website has a longer than average load time, it’s often the case that it’s been designed poorly at the back end of the site. To identify how fast your website actually is in comparison to your competitors, check out <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank" rel="noopener noreferrer">Google PageSpeed Insights</a>. It will also show how well your website will perform on all platforms including mobile and tablet devices.

<img class="alignnone size-full wp-image-639" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/PageLoadTime_MainImage_644x362_1.jpg" alt="" width="644" height="362" />
image courtesy of <a href="https://magento.com" target="_blank" rel="noopener noreferrer">magneto.com</a>
<h4>Functionality is key</h4>
Ever wanted to perform a task on a website and you’ve encountered the dreaded ‘404 error’ pages numerous times instead of the initial page you were after, how did you react? I’d imagine you would go back to your chosen search engine and click on another website to perform the initial task; it’s more likely that the two websites you’ve been on are in some way competitors.

This is why functionality has such a significance when it comes to a website; you must ensure that it is up-to-date and without any errors otherwise you risk losing your customers to your competition.

These have just been a few of the characteristics of good web design; part two will be coming soon. All of our web projects feature these characteristics and if you’d like to us to build your next website, give us a call on 02920886582 or <a class="contact-modal" title="Link to contact form" href="/contact-us">email us</a>.`,
        date: '2016-08-10',
        category: 'Advice'
    },
    {
        slug: 'wordpress-themed-websites-vs-bespoke-websites',
        title: 'Wordpress Themed Websites VS Bespoke Websites',
        excerpt: 'Websites are a great way for your business to gain a competitive edge, as they allow you to express what your business involves through a variety of pages, images and unique selling points. If you’re a new business and you want to reach new customers and build an online presence then it will certainly benefit you having a website. You may already have had a website for a long period of time but feel like it needs updating, then this guide will show you which design is best for you.',
        content: `Websites are a great way for your business to gain a competitive edge, as they allow you to express what your business involves through a variety of pages, images and unique selling points.

If you’re a new business and you want to reach new customers and build an online presence then it will certainly benefit you having a website.

You may already have had a website for a long period of time but feel like it needs updating, then this guide will show you which design is best for you.
<h2>Wordpress Themed Websites</h2>
Did you know that Wordpress powers more than <a href="https://wordpress.org/about/features/" target="_blank" rel="noopener noreferrer">24% of the web?</a>

Wordpress built websites are simply template-designed sites that have excellent functionality, flexibility and style along with an easy-to-use content management system.

<span style="text-decoration: underline;">So what makes Wordpress so impressive?</span>

<strong>Ease of use</strong>

It is rather simple to use for starters, thanks to a user-friendly interface which makes it easy to add images, pages, blog posts to your site. You won’t have to spend a lot of time formatting as Wordpress already does that for you.

Whether you’re updating information about a product or uploading images to your site; you can manage any changes with other users so they can edit them if they need too.

<img class="alignnone size-full wp-image-638" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/wordpress_1.jpg" alt="" width="680" height="318" />
image courtesy of <a href="http://www.siteground.com" target="_blank" rel="noopener noreferrer">www.siteground.com</a>

<strong>SEO-Friendly</strong>

When it comes to adding content, you have to consider how are people going to find it online, if they aren’t familiar with your website?

The answer is SEO (search engine optimisation), more specifically on-site optimisation. A great feature with Wordpress is it has a lot of plugins available for your site; Yoast SEO is one of them. This plugin shows you exactly what you need to have a fully optimised page, e.g. longer Meta descriptions, alt images and so forth.

<strong>Plugins to cater your business needs</strong>

Plugins are essentially a piece of software which can be added to your website, Wordpress has so many plugins available that there’s something for everyone.

These include simple but effective plugins such as contact forms (obtain customer information), social plugins; so that you can share your content across social media platforms.

Want to set up an ecommerce store through your site? <a href="https://wordpress.org/plugins/woocommerce/" target="_blank" rel="noopener noreferrer">WooCommerce</a> is the plugin which allows you to sell anything online globally.
<h2>Bespoke Websites</h2>
Bespoke websites are exactly what you think they are, bespoke and tailored to your business.

If you truly want to stand out from your competition online, then it’s definitely a way to do so.

Here are benefits of having a bespoke website:

<strong>Built specifically for your business</strong>

When you use a Content Management System (CMS) such as Wordpress, you are fundamentally using predesigned templates which lots of other websites are using; this could mean your site may end up looking rather similar to your competition.

This however isn’t the case with bespoke websites, as they are developed and designed specifically with your business in mind.

Whether this is to have your business processes automated or a booking system integrated within your site; bespoke websites are tailored to the business, so no matter what you want your site to look like, it will be unique including the back end of the website.

<img class="alignnone size-full wp-image-666" src="https://www.amityweb.co.uk/wp-content/uploads/2016/06/melin-homes_site_1.jpg" alt="" width="610" height="351" />

<strong>Longevity</strong>

When you have a bespoke website, you won’t have to change the site over time as often as you would with template-designed website.

Why, you ask? Because bespoke websites are built around your brand, therefore unlike template-designed sites, your site will be future-proof and extremely relevant for a long time.

<strong>Responsive for all devices</strong>

Bespoke websites are hand-coded which also means that they are responsive on all devices; this is extremely beneficial these days as the number of mobile of users is increasing yearly.

Google has stated that a definitive factor when <a href="http://searchengineland.com/responsive-design-ranking-factor-228464" target="_blank" rel="noopener noreferrer">ranking a website is if it’s designed responsively</a>; therefore when you have bespoke site, it can really help with your rankings when users input keywords on search engines.

If you want to find out more about these types of websites, read our archive blog <a href="/blog/6-reasons-why-bespoke-websites-are-awesome-for-your-business">why bespoke websites are awesome for your business</a>.
<h3>Verdict</h3>
Both Wordpress themed and bespoke sites have their benefits, this includes:
<ul>
 	<li>A fast and user-friendly website</li>
 	<li>SEO-friendly</li>
 	<li>Easy-to-use content management system</li>
 	<li>Plugins or features tailored to your site.</li>
</ul>
We offer responsive and super-fast <a href="/bespoke-website"><strong>bespoke websites</strong></a> that are hand built to the highest quality. We specialise in bespoke websites designed specifically to meet your customer and business needs and we would love to build your next website, to help you reach your online potential. We also offer <a href="/wordpress-website">Wordpress designed websites</a> too.

For more info, <a class="contact-modal" title="Link to contact form" href="/contact-us">email us</a>  or give us a ring on 029 2088 6582 and we can discuss any bespoke projects with you.`,
        date: '2016-06-29',
        category: 'Advice'
    },
    {
        slug: 'why-your-business-should-have-a-blog',
        title: 'Why your business should be blogging',
        excerpt: 'Did you know that B2B marketers that use blogs receive 67% more leads than those who don’t use this within their content? You may think that your website doesn’t require a blog section for various reasons; whether this is because you think your business wouldn’t suit the style of blogging, or you’d find it difficult about what to write.',
        content: `<strong>Did you know that <a href="https://blog.hubspot.com/marketing/business-blogging-in-2015?__hstc=191390709.17edde227daf97eabdd76399a5afe31a.1466424202952.1466424202952.1466424202952.1&amp;__hssc=191390709.1.1466424202952&amp;__hsfp=1705145400#sm.0000113vpjtmnydubqy2qvrdjtiv1">B2B marketers that use blogs receive 67% more leads</a> than those who don’t use this within their content?</strong>

You may think that your website doesn’t require a blog section for various reasons; whether this is because you think your business wouldn’t suit the style of blogging, or you’d find it difficult about what to write.

Here's the reasons to why you should blog for your business:
<h2>Traffic to your website</h2>
One of the key factors to why you should blog on your site is to increase traffic (visitors).

Your current customers can reach you through your URL address which is beneficial, but what about customers who aren’t aware of you? Traditionally, you could try Pay-Per-Click (PPC) advertising but this method can be quite expensive for smaller companies.

Every time you blog on your website, it will be indexed by Google which makes your website more likely to be found through organic search engines and fundamentally drive traffic to your site.

Once you’ve published your blog, be sure to provide links to it on your social media platforms, e.g. Facebook, Twitter and LinkedIn. If you’re blog is knowledgeable, users will share it through their network and you’ll be credited for it.

<img class="alignnone size-full wp-image-670" src="https://www.amityweb.co.uk/wp-content/uploads/2016/06/creative-ways-to-drive-traffic-feature-image_1.png" alt="" width="600" height="235" />
image courtesy of<a href="http://www.elegantthemes.com" target="_blank" rel="noopener noreferrer"> www.elegantthemes.com</a>
<h3></h3>
<h3>SEO Purposes</h3>
When you blog as a business, you should have a clear goal on what you want to achieve from it, don’t just blog for the sake of it.

Let’s say you’ve launched a new product for your business and you want to create some buzz around it, blogging can be an effective way in doing so.

Firstly, the keywords you want to target for needs to be included within the blog itself, however try not to overdo with the keywords as search engines will identify it as ‘Keyword Spamming’.

What you want is for the user to be able to read the blog naturally and not read as if it’s been manipulated specifically for keywords. Don’t forget to add your keywords to all the relevant header tags too (H1, H2’s) and alt texts (this is how Google reads your images).

Once your blog is fully optimised for SEO, you’ll have a better chance of ranking for your chosen keywords. If you want a more in-depth guide in how to improve your on-site optimisation, take a look at our blog <a href="/blog/ultimate-beginner-guide-to-seo">here</a>.

<img class="alignnone size-full wp-image-669" src="https://www.amityweb.co.uk/wp-content/uploads/2016/06/SEO_1.jpg" alt="" width="1790" height="976" />
image courtesy of <a href="http://www.bullhorn.com" target="_blank" rel="noopener noreferrer">www.bullhorn.com</a>

&nbsp;
<h3>It helps show you’re an expert in your industry</h3>
When choosing a product/service to buy it’s often you would choose the business that has the most knowledge in their area of expertise.

For example, we’re a Web Design and Development agency, so our blog is to provide knowledge in this industry and show the importance of having bespoke websites can make your website stand out from your competitors.

The more often you blog about various aspects of your business/industry, you’re becoming more trustworthy within your field and to your target market. This is especially the case, if your business is in a niche market as it gives you authority online as your customers aren’t able to obtain the knowledge elsewhere.

<img class="alignnone size-full wp-image-671" src="https://www.amityweb.co.uk/wp-content/uploads/2016/06/expert_1.jpg" alt="" width="276" height="183" />
image courtesy of <a href="http://www.soundword.com" target="_blank" rel="noopener noreferrer">www.soundword.com</a>

&nbsp;

We hope after reading this blog, you’ve gained a better understanding of why you should have a blog and how it can be really beneficial for your website, customers and online presence. If you have any questions about blogging, SEO and web design, feel free to <a href="/contact-us">contact us</a> and we’ll be more than happy to talk to you about your website.`,
        date: '2016-06-20',
        category: 'Advice'
    },
    {
        slug: 'beginner-guide-to-seo-part-3',
        title: 'The Ultimate Beginner Guide to SEO - Part Three',
        excerpt: 'Welcome to part three of our Ultimate Beginner Guide to SEO, this part will give you reasons to why the design of your website is important for SEO, how optimising for mobile plays a part in SEO and how you can track your SEO using some great tools.',
        content: `Welcome to part three of our Ultimate Beginner Guide to SEO, this part will give you reasons to why the design of your website is important for SEO, how optimising for mobile plays a part in SEO and how you can track your SEO progress using some great tools.

If you missed either part one or two of the guide, use the links below to catch up.

<a href="/blog/ultimate-beginner-guide-to-seo">Part one</a> / <a href="/blog/beginner-guide-to-seo-part-2">Part two</a>
<h2>Optimised for mobile</h2>
<strong><em>"Did you know that 2015 was the first time that mobile traffic exceeded that of desktop users and it looks to continue that way too."</em></strong>

If your website isn't mobile-friendly then you could be missing out on a lot of potential customers, especially if you're an online retailer. Consumers are using their mobiles for practically everything, e.g. paying for groceries, playing games and using apps.

You can check to see how your website performs on mobile devices by using <a href="https://www.google.co.uk/webmasters/tools/mobile-friendly/" target="_blank" rel="noopener noreferrer">Google's Mobile-Friendly Test tool</a>.

If you're unsure about how important it is for your website, we recently wrote a blog about the matter; "<a href="/blog/why-mobile-optimisation-is-crucial-in-retaining-customers">Why mobile optimisation is crucial in retaining customers</a>", here's some digestible information from it:
<ul>
 	<li>Mobile users view websites differently</li>
 	<li>It can generate traffic to your website</li>
 	<li>Better engagement with your target audience</li>
 	<li>Unoptimised site could potentially damage your brand</li>
 	<li>It's estimated that there will be over 5 billion users by 2019.</li>
</ul>
<h2>Responsive Design</h2>
Responsive design is when your website is designed so that it looks great on all devices i.e. mobile and tablets. If someone accesses your website on these devices and they either have to zoom in or out, scroll horizontally or the links are to small to read then they'll be more likely to leave the website and go on a competitor's site.

This type of design isn't just a trend with larger companies anymore, it's fast becoming an integral part of a web design project. If you're wondering how does this affect SEO, in simple terms it's all down to the accessibility of your website.

If someone visits a non-responsive site and can't perform a simple task; then the probability that they'll leave the site is going to be higher than that if they visited a mobile-friendly site. Google will pick up on this, as their algorithm identifies the bounce rate on your website therefore ranking the mobile-friendly sites higher.

Google prefers responsive design over having a separate mobile site as it makes the website more user-friendly and functional for the user. Our website is responsive on all devices and we can build <a href="/bespoke-website">your site</a> with the same functionality.

<img class="alignnone size-full wp-image-674" src="https://www.amityweb.co.uk/wp-content/uploads/2016/05/Screen_Shot_2016-03-08_at_14.44.02-2.png" alt="" width="610" height="1124" />
<h2>Usability of your website</h2>
The usability of your website can affect how search engines rank your pages; therefore it is imperative that your website is user-friendly. If users find it difficult to use your website then your bounce rate is going to be high; so here's some key points on how to make your website highly accessible to users and to decrease the bounce rate:
<ul>
 	<li>Your site should have a simple navigation tool and be easy to use</li>
 	<li>The content on your pages should be engaging and relatable to what your website offers but also of a high-quality</li>
 	<li>Alt images tags should be optimised (this is how Google identifies what the image is)</li>
 	<li>Check your website for any errors using this free software '<a href="http://www.screamingfrog.co.uk/seo-spider/" target="_blank" rel="noopener noreferrer">Screaming Frog</a>', it crawls your website and identifies any issues with your site, which could be affecting the usability of the site.</li>
</ul>
<img class="alignnone size-full wp-image-643" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/design-usability-1-2.png" alt="" width="610" height="636" />

image courtesy of <a href="http://www.fatcow.com" target="_blank" rel="noopener noreferrer">fatcow.com</a>
<h2>XML Sitemaps</h2>
A sitemap is simply a file where you can list each of your web pages of your website in order to tell search engines about the organisation of your site's content. They are also great as they provide valuable meta data that is associated with the pages that were last updated.

Google recommends you would need a sitemap if your website fits within these criteria's:
<ul>
 	<li>You have a very large site, the web crawlers (Google) may overlook some of your new pages or the pages you have recently updated, so it's good to get a XML sitemap</li>
 	<li>Your website has an extensive archive of pages that aren't linked to each other or are isolated</li>
 	<li>You have a brand new site; that would mean very few external links to it</li>
 	<li>If your website has sitemaps-compatible annotations, rich media content and/or is shown with Google News.</li>
</ul>
<h2>Google My Business</h2>
This free service from Google gets your business information enlisted on their site so that you can connect with your customers through Search, Google+ and Maps. Your customers will be able to find your business more easily through any device, they will be able to show their appreciation of your business by leaving ratings and reviews of your products and services and you can also share insightful content through Google+ to your customers.

When customers are searching for local businesses, your business' information can then be found along with directions on how they can find you or your contact details; if someone is searching through their mobile phone then there's a call-to-action button (telephone number) for them to contact you directly.
<h2>Checking your progress</h2>
Want to know how your SEO techniques are working since implementing them? Firstly, ensure that you've configured your <a href="http://www.google.com/analytics/#?modal_active=none" target="_blank" rel="noopener noreferrer">Google Analytics </a>with your website.

Ever wondered how many visitors you've had, demographics of those visitors, bounce rate/conversion rate, keywords they used to find you and so forth?

Well by using Google Analytics you can see all of the above stated about your website, it's truly a powerful and valuable tool which all websites should use. Once you've done the changes to your site, you can then monitor those changes and continually refine the SEO practices in order to optimise the site. There's also another great tool called <a href="https://www.google.com/webmasters/#?modal_active=none">Google Search Console </a>which allows you track how visible your site, performance, links to your site and more.
<h2>Glossary of SEO terms</h2>
<h3>0-9</h3>
<em><strong>301 Redirect</strong> </em>- This is when you make a webpage redirect the user to an alternative page. If you happen to change the web address of a page, be sure to apply a 301 Redirect to ensure that the new web address is the page that it's supposed to get directed to.

<em><strong>404 error</strong></em> - This means that the webpage you are trying to access can't be found on the server, mostly the case if the page has been removed or the page's URL hasn't been changed properly.
<h3>A-Z</h3>
<strong><em>Alt text/tag</em></strong> - This describes the image in your website's HTML, ensure that you've added relevant Alt text to all of your images so that Google can read them and understand the purpose of them too.

<em><strong>Blog</strong></em> - A blog is a dedicated space on your website in which you regularly publish content for your audience, this can be anything from product launches to how-to-guides. It's good to blog regularly as each time you create a new one, it's a way for Google to identify a new page which can mean increasing your chances of being found online.

<em><strong>Backlinks</strong></em> - Backlinks are basically incoming links to your website, the best form of backlinks are when you produce high-quality content and other websites want to feature it on their sites, so you would gain a backlink from it. The stronger your backlinks are from highly reputable sites, the better your chances are that you'll appear higher up in search results.

<em><strong>Canonical URLs</strong></em> - There are your URLs in which you want search engines to crawl, basically the URLs you want your visitors to specifically to reach e.g. landing pages.

<em><strong>Domain Authority</strong></em> - Your Domain Authority is how much authority your domain (entire website) has on search engines, the higher your DA score, the higher you'll rank for keywords.

<em><strong>Duplicate content</strong></em> - When you have similar or identical content found on other websites or pages, search engines don't like this therefore you'll receive very little trust from them. To avoid this from happening, you can use the free <a href="https://www.screamingfrog.co.uk">Screaming Frog tool</a> to crawl your site for duplicate content.

<em><strong>E-commerce store</strong></em> - A website in which it's sole purpose is to generate retail sales e.g. Amazon.

<em><strong>FAQs</strong></em> - Frequently Asked Questions (FAQs), are page(s) dedicated to repeated questions that have been asked by users/customers, it's also good for SEO as you're adding a new page and you have the opportunity to include keywords within it.

<em><strong>Google</strong> </em>- Google is the leading search engine and has the most influence in regards to search engine optimisation. If Google loves your content then watch your pages rank higher.

<em><strong>Index</strong></em> - This is the collection of web pages and information which is acquired by search engines via crawling the World Wide Web.

<em><strong>Infographics</strong></em> - This type of content is a visual representation of data e.g. statistics presented within a diagram or chart. Infographics are a great way to obtain backlinks as they are a useful tool for businesses to have on their site.

<em><strong>Keyword</strong></em> - The phrase(s) or word that users would enter into search engines e.g. Google.

<em><strong>Keyword stuffing</strong> </em>- Excessively using keyword(s) and phrases within your content to increase the keyword density, in order to increase the page's rankings.

<em><strong>LinkedIn Pulse</strong></em> - This is a fairly new platform in which you can publish articles/blogs on, reaching a large audience at the same time. It's predominantly used for B2Bs but if the content is relevant and useful, people are likely to share it on their social networks.

<em><strong>Landing pages </strong></em>- Landing pages are the pages that a visitor lands on through search engine marketing or Pay-Per-Click (PPC), the landing page would often have a strong call-to-action button and a form in which you can capture a visitor's information.

<em><strong>Long tail keyword</strong> </em>- A series of keyword(s) or phrases which are really specific and have more chance of ranking for these keywords than a competitive one. An example of a long tail keyword would be 'Web Design in Newport'.

<em><strong>Meta Title/Tag</strong></em> - Meta title/tag itself is what appears in the results on search engines, the title should give the visitor a clear idea on what the page is going to be about.

<em><strong>Meta Description</strong></em> - Meta description is basically the summary about the webpage which appears on the search engine results.

<em><strong>Mobile-friendly</strong></em> - Mobile-friendly is the term when you access a website on a mobile device and it's been optimised for that purpose, (works perfectly without having to zoom in or out, horizontally scroll and all the links on the web page work fine).

<em><strong>Nofollow</strong></em> - When a specific link from another site does not pass any SEO credit whatsoever, only use this when linking to external websites that you don't want any association with.

<em><strong>Off-site optimisation</strong></em> - Off-site optimisation are measures that you implement that aren't directly on your website but on other websites, these will improve your rankings if done correctly. Link-building is an integral part of off-site optimisation as Google ranks credible backlinks as it's highest factor when ranking your pages, as they use it to see if your site is authoritative.

<em><strong>On-site optimisation</strong></em> - These are the measures that take place directly on your website in order to get your website fully optimised for SEO, e.g. alt tags, meta title/description, page speed, keyword usage etc.

<em><strong>Organic link-building</strong></em> - Organic link-building is when you create high-quality content and websites want to link it to their site. Gaining credible links from high-reputable websites is key to this and Google has identified this as the most important factor when deciding how to rank a page.

<em><strong>Page Rank</strong></em> - This is how Google measures the link popularity of a website on a scale 1-10, with 10 being the highest possible ranking a page can be given. Websites who provide high-quality articles in which other backlink to them reach the higher end of the scale.

<em><strong>Robots.txt</strong></em> - A file located in the root directory on your website, robots can restrict search engines to crawl certain areas of your site and manipulate their behaviour.

<em><strong>Spiders</strong> </em>- Spiders are a unique piece of software which browses the web, identifies new websites/pages, checks the validity of the site and sends the data back to the search engine (Google) so that they can index and rank the sites accordingly.

<em><strong>SERP</strong></em> - Search Engine Results page (SERPS) : This is the page that's displayed when a user searches for a keyword on search engines e.g. Google and Bing.

<em><strong>Traffic</strong> </em>- Traffic is simply the visitors to your site, whether this has come from doing search engine marketing or social media.

<em><strong>URL</strong> </em>- This is the web address of any page on your website, e.g. (www.yoursite.com/blog)

<em><strong>XML sitemap</strong> </em>- An XML sitemap is a file where you can list each of your pages of your website in order to tell search engines about the organisation of your site's content, They are an alternative way for search engines to crawl your pages but also an accessibility factor.

We hope after reading our comprehensive guide to getting starting with SEO that you'll be able use these methods to optimise your website, increase traffic and gain higher rankings on Google for your chosen keywords. If you're still unsure about how to make these changes or just want some friendly advice about how we can help you with your SEO, feel free to give us a call on 029 2088 6582 or <a class="contact-modal" title="Link to contact form" href="/contact-us">email us</a>`,
        date: '2016-05-31',
        category: 'SEO'
    },
    {
        slug: 'beginner-guide-to-seo-part-2',
        title: 'The Ultimate Beginner Guide to SEO - Part Two',
        excerpt: 'This is part two of our Ultimate Beginner guide to SEO, we will be going into more detail about what\'s needed to create great content and the fundamentals of a link-building strategy. If you missed part one of our guide, see below for the link.',
        content: `This is part two of our Ultimate Beginner guide to SEO, we will be going into more detail about what's needed to create great content and the fundamentals of a link-building strategy.

If you missed part one of our guide, see below for the link.

Part one
<h2>Content marketing</h2>
Content marketing is when you create and distribute engaging and valuable content with a view to attract a more of a relevant target audience, all with coinciding with the objective of driving sales, brand awareness and traffic to your website.

One of the best ways to increase your ranking on search engines is by producing high-quality content that is share-worthy. When you regularly add quality content to your website, Google likes it. Especially when it has a lot of depth to it rather than shorter pieces of content, <a href="http://blog.serpiq.com/how-important-is-content-length-why-data-driven-seo-trumps-guru-opinions/">it's been proven.</a> If you write engaging content such as blogs with at least 1500 words then Google will identify the content as beneficiary which can mean better rankings. However, if you create content with at least 2,000 words, Google's SERP position highlights this as long form content (in-depth articles) which definitely has it's benefits for rankings.

Content can be created through a variety of forms; blogs, news, articles, posts, infographics, e-books, FAQs, videos etc. When creating any form of content, you should include keywords that you want to rank higher for as this is one way people will find your website.

Writing a regular blog is a key part in a content marketing strategy as it enables you to tailor your content according to your chosen keywords, it's estimated that there are more than <a href="https://moz.com/blog/category/blogging" target="_blank" rel="noopener">33 million new blogs posts</a> each month through Wordpress alone, the scope is massive. This just shows how popular blogs amongst all business types.

When creating content, it's recommended that you device a strategy which suits your industry and customers. You should try to use a variety of forms of content but if you have limited budget or time, the very least you should do is to blog about your products or services.

<img class="alignnone size-full wp-image-644" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/iStock_000005614684Medium-1024x682-2.jpg" alt="" width="610" height="406" />

image courtesy of <a href="http://www.outbrain.com">http://www.outbrain.com</a>
<h2>Link-building Strategy</h2>
First off, you may have seen the terms white-hat and black-hat link-building and thought what's the difference? Well, Black-hat building is an SEO technique used to drive traffic to websites and rank higher for keywords through non-organic ways such as buying links or sourcing links from spammy sites such as gambling-related websites.

Back in the day, companies would use this tactic as a way to generate links to their site and Google wouldn't penalise them for it. We highly recommend you don't use this type of link-building strategy as it could mean your website could end up being penalised by Google or even not appear on their search engine altogether. You may see quick results from doing it but if you want to establish your business and it's online presence then you should proceed with an organic (white-hat) link-building strategy.

Organic link-building is also better known as 'white-hat link-building', this involves creating exciting and relevant content that people want to link to their site, this could be a blog, article, infographic, viral campaign and more.

If your content is unique and worth sharing then your audience are likely to share it. You can also guest post on other websites; check their Domain Authority so that it can help your site rank for your keywords.

<a href="http://backlinko.com/17-untapped-backlink-sources" target="_blank" rel="noopener noreferrer">Backlinko</a> have created an excellent and comprehensive resource on how to gain credible backlink sources that many people may have overlooked, there are some truly awesome and creative ways which could help you increase your backlinks.

We recommend creating engaging content, you should then post it on your social media platforms e.g. Facebook, Twitter, LinkedIn (useful for B2B's), Pinterest and Instagram. You've just got to take into account whichever platform you're posting on that it's relevant to your customers and the platform that you've posted it on.

<img class="alignnone size-full wp-image-645" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/image901-2.png" alt="" width="910" height="613" />

image courtesy of <a href="https://neilpatel.com/" target="_blank" rel="noopener noreferrer">www.neilpatel.com</a>
<h2>Page Authority</h2>
Google determines the authority of your webpage through looking at the quality and quantity of inbound links, this is still the most important factor on how they rank your pages. That's why you'll often see the larger companies rank at the top as they've gained authoritative backlinks from other websites. To check your Page Rank score, use <a href="https://moz.com/link-explorer" target="_blank" rel="noopener noreferrer">Open Site Explorer</a>, a truly fantastic tool which gives you a detailed analysis on your backlinks and opportunities on where you can get new backlinks from.
<h2>Relevance of links</h2>
If you sell handmade jewellery on your website, you would preferably want backlinks from websites that are either similar or have some relevance to your website i.e. fashion blogs. Google has mentioned that you shouldn't just obtain backlinks from a website that doesn't have any relevance to your website, as it could be deemed as buying links etc.
<h2>Keyword Research</h2>
This is where some companies go wrong, they want to rank extremely high for competitive words but they don't seem to get the results that they anticipated, this is due to all of their competitors are targeting for the same/similar keywords within their content too.

Websites with high Domain Authority scores, for example; Amazon will always rank high for these keywords, that why you need to identify what your customers are searching for and target these keywords instead. Let's say you're an online store specialising in men's shoes, instead of trying to rank for 'men's shoe's', use a long-tail keyword such as 'men's black oxford shoes', this type of keyword is far less than competitive than the keyword 'men's shoes'.

The more specific and longer the keyword(s), the likelier you are to rank for it. If you're unsure about how to identify these long-tail keywords then you can use <a href="https://adwords.google.com/KeywordPlanner">Google's Adwords Keywords Tool</a> and their <a href="https://adwords.google.com/KeywordPlanner">Keyword Search</a> Tool for free, both of the will suggest new keywords based on your current keywords. There's also another good alternative <a href="https://www.semrush.com">SemRush's keyword tool</a>, which is free to use for a limited amount of searches per day.

<img class="alignnone size-full wp-image-646" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/Keywords_research.jpg" alt="" width="610" height="409" />
image courtesy from <a href="http://www.lauramanigan.com" target="_blank" rel="noopener noreferrer">lauramanigan.com</a>

If you've enjoyed reading part two of our Ultimate Beginner Guide to SEO, then be sure to check out the next addition of it coming shortly. In the mean time, why not take a look at part one of our guide, if you want to recap anything.

The next part will feature everything from how the design of your website can affect SEO, why optimising for mobile plays a part in SEO and how to track your progression of your SEO practices. If you'd like to chat to us about your SEO challenges, then feel to free to call us on 029 2088 6582 or <a class="contact-modal" title="Link to contact form" href="/contact-us">email us</a>.

&nbsp;`,
        date: '2016-05-23',
        category: 'SEO'
    },
    {
        slug: 'ultimate-beginner-guide-to-seo',
        title: 'The Ultimate Beginner Guide to SEO - Part One',
        excerpt: 'Search Engine Optimisation or SEO as it\'s more commonly known; is defined as the "marketing process which focuses on the growth and visibility of your website on search engine e.g. Google". A lot of people find SEO marketing rather complex, so we thought we\'d help you gain a better understanding of it and hopefully rank higher for keywords targeted at the same time.',
        content: `Search Engine Optimisation or SEO as it's more commonly known; is defined as a "marketing process which focuses on the growth and visibility of your website on search engines e.g. Google".

A lot of people find SEO marketing rather complex, so we thought we'd help you gain a better understanding of it and hopefully rank higher for those keywords targeted at the same time.

This guide will give you the appropriate techniques that can be applied to your website in order to improve your page ranking and organic searches.

Marketers categorise SEO into two parts: on-page optimisation and off-page optimisation. On-page optimisation are the measures that take place within your website therefore to improve the overall position of it in the search rankings.

We'll look into this aspect of search engine optimisation firstly, as how optimised your webpages is a key factor that Google takes into consideration when ranking your site.
<h2>On-page optimisation factors</h2>
<h3>Title tag</h3>
The title tag is an important factor when it comes to optimising your website; the title itself is what appears in the results in search engines, so it's essential it's fully optimised.

It should give the user a good indication about what the initial page will appear on it, so if you're an e-commerce store selling electrical goods; it would be advised to name each title tag after a specific item you're selling e.g. Sony PlayStation 4.

When a user searches on Google for a keyword, one of the ways for Google to identify your site is through the title tag. If you include keywords that your customers are using within the tag it can help you rank more significantly than without one. Here's some guidance on creating a great title tag:
<ul>
 	<li>The title tag should be between 55 to 60 characters long which is including spaces (approximately 9-12 words)</li>
 	<li>Try not to repeat or duplicate keywords, this is referred as keyword spamming</li>
 	<li>The title tag should should be readable by humans</li>
 	<li>Use the most important keyword first in the title tag, it has a lot more influence this wat, if applicable use it at the very beginning of the tag</li>
 	<li>Each title tag has to be unique and should be easy to identify what the page will be about.</li>
</ul>
<img class="alignnone size-full wp-image-647" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/Review-Your-Title-Tags-For-Search-Engine-Optimization-11-2.jpg" alt="" width="600" height="450" />
image courtesy of <a href="http://www.seoworkz.com" target="_blank" rel="noopener noreferrer">seoworkz.com </a>
<h3>Meta description</h3>
The meta description is a vital part of on-page optimisation, it's basically a summary of what the web page will entail but it's also used for keyword search results. They may not necessarily be important in terms of search engine ranking but they are certainly valuable in gaining user click-through (CTR) from search engine result pages.

One of the fundamental reasons why it's good to use them is when a user searches for a specific keyword/phrase, it will be bolded within the search results.

Here are a few tips on optimising meta descriptions:
<ul>
 	<li>It's best to keep it between 150 and 160 characters</li>
 	<li>Use persuasive language to entice the user to click on your website, calls to actions are a great way to do this</li>
 	<li>Imagine reading the meta description and when you land on the website you are shown something completely different to the description, keep it relatable to the content</li>
 	<li>If Local SEO marketing is part of your strategy; then using the town/city you're targeting in the meta description is essential</li>
 	<li>Each meta description should be unique for each page and easily identifiable to the user what exactly the page will feature</li>
</ul>
If you want to see exactly how your meta description will look before making any practical changes to your site, give <a href="https://moz.com/learn/seo/title-tag" target="_blank" rel="noopener">Moz' Title Emulator Tool </a>a go, We'd advise to use this tool on a desktop browser as you'll get the most accurate results through it.

<img class="alignnone size-full wp-image-648" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/How-to-write-meta-descriptions-that-sells-2.jpg" alt="" width="610" height="147" />
image courtesy of <a href="http://www.localvox.com">www.localvox.com</a>
<h3>ALT text/tag</h3>
This is simply the description of an image being used on your site's HTML. Search engines only read ALT text of images, so make sure you add ALT text to all of your images so that they can identify it, also include keywords within your ALT text as long as it is relevant to the image.

<img class="alignnone size-full wp-image-649" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/alt-text-blog-post_0-2.jpg" alt="" width="610" height="348" />
image courtesy of<a href="http://www.rnib.org.uk"> http://www.rnib.org.uk</a>
<h3>Usage of Headings (H1, H2, H3 etc)</h3>
These should be added to your site as it increases the fluidity of your content and allows users to grasp what each part of the content will be about, it's also good for structuring your content.

Headings are also good for breaking down the content into smaller pieces of information, it enables the visitor to skip over parts and read specifically what they've been searching for.
<h3>H1 tags</h3>
H1 tags are easily the most important heading that you should be using for on-page optimisation, the heading doesn't have to be the same as the page title but it should have some relevancy; otherwise you risk users leaving your site. Google has recommended that you only use one H1, so ideally this should be engaging in order to get the user to continue to read the content on the page.
<h3>H2 tags</h3>
H2 tags aren't as important as H1 tags but we'd definitely advice including them, also try to have your chosen keywords within them too, Google likes it and will reward you for it. They are simply subheadings for your H1, which is great to divide content into subsections and to show significance between what will grab the audience's attention and hopefully continue reading your content.
<h3>Search Engine Friendly URLs</h3>
How search engine friendly are your URLs on your website? Don't think in terms what Google identifies on the screen but what a human would read. Try to include keywords within the URL so that they can understand what the page will be about before landing on the page e.g. "web-design-newport.html" or "contact-us.html".
<h3>Speed of your website</h3>
The speed of your website affects how you rank for keywords for according to Google as it's part of their algorithm, they can actually estimate your site's speed by looking into the file size and page's code.

We recommend using <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank" rel="noopener noreferrer">Google PageSpeed Insights</a> to identify how fast your site, it will tell you why it's performing to that speed and what changes need to be made to speed up the performance of your website, e.g. optimising the images on the page. This tool will also show you how fast your website is on all platforms including mobile which is extremely important in today's society.

We will be covering more about mobile optimisation in the next addition to our guide.

When looking at the page speed of your website, you've also got to consider how good is your web hosting that is being provided? If your website is taking longer than 3 seconds, you may have to reconsider your hosting provider. If you're unsure on what features are needed for a reliable web hosting service, then check out our comprehensive guide on <a href="/blog/how-do-i-choose-the-best-web-hosting-for-my-business">how to choose the right web hosting for your business.</a>

<img class="alignnone size-full wp-image-650" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/page-load-speed-important-factor-for-seo-2.jpg" alt="" width="610" height="271" />

image courtesy of<a href="http://deeptut.com"> http://deeptut.com </a>
<h3>Outbound links</h3>
Outbound links are links on your web pages that link to other websites, this practice is best used when if you're blogging about a particular topic and you're either either quoting or using statistics to back up your point. Try to link your content with websites with high domain authorities as they are trusted by Google.
<h4>Internal Linking</h4>
Internal linking is when you have links on your web pages within your content that link directly to another page on your website. It's a good way to structure the various web pages on your site and improve the usability too. It's best to internally link when the content is relevant, Amazon are a great example of doing this.

If you're looking at a product on their site, they will suggest other products that you may like based on your viewing habits.

If you've enjoyed reading part one of our Ultimate Beginner Guide to SEO, then keep an eye out for our next part coming soon. We will be covering the various aspects of SEO that can improve your website's visibility on search engines and hopefully increase your rankings for your chosen keywords.

If you'd like talk to our team about your SEO challenges, we'd be more than happy to help you. You can either call us on 029 2088 6582 or <a class="contact-modal" title="Link to contact form" href="/contact-us">email us</a>.`,
        date: '2016-05-17',
        category: 'SEO'
    },
    {
        slug: 'how-to-choose-the-right-web-design-company',
        title: 'How to choose the right web design company',
        excerpt: 'Choosing the right web design company for your business can be quite challenging, we will help through our thought process.',
        content: `If you search "web design companies" on Google, you will get about 257,000 results in under a second, even if you search "web design Newport" in the UK, you'll get about 272,000 in under a second. That's a lot of choice. Almost anyone with some experience in designing websites can setup their own freelance web design company. Each web design company will differentiate themselves from their competitors; this could be anything from low-cost websites to bespoke applications. To someone who doesn't have much knowledge of web design, a lot of the companies could feel all too similar.

Here are some key factors when choosing a web design company for your website:
<h2>Their Website</h2>
First things first, you will want to check out their website; how does it look? If their website is in need of serious makeover, then you might be a little wary of the service that they can provide. Similar indicators will come from looking at the functionality of the site: if you're frequently encountering "404 error pages" and broken links, it implies they aren't updating their site enough and let it fall into disrepair. If the company's website is accessible and functions to the purpose of the website then it's usually a good indication that they are a credible web design company.
<h2>Portfolio</h2>
A client portfolio allows designers to show off their previous work to the rest of the world. Portfolios can be a great insight into what a designer's standard of work is like but it's also a way to determine whether your website goals match their principles. If there are examples of within the portfolio that look rather similar to each other, they've more than likely used template themes which lack customisation. Within the portfolio section, you can usually read the case study of each example; this feature on their website should give you a rough indication if they are suitable for your project.

<img class="alignnone size-full wp-image-651" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/portfolio.png" alt="" width="610" height="528" />
<h2>Experience</h2>
When it comes to choosing a web design company, it's always a good thing to check how long they have been operating for. Usually if they've done business for over five years, they are an established business and have worked with a variety of clients. If you were to hire a web design company who are relatively new, there's quite a risk whether they can meet your customer needs, plus you aren't able to see much of their previous work and feedback from previous clients.
<h2>Communication</h2>
Good communication between the web design company and yourself is essential, as you will want your new website to match your business objectives, brand identity and company values. Having regular discussions with them can make a positive impact on how the website is designed to your preferences. Your involvement is essential to ensure your website aligns with your requirements.
<h2>Social media presence</h2>
Businesses who regularly use social media to promote their products, inform customers and create engaging content have seen astounding results; a<a href="http://fortune.com/2015/11/18/businesses-cant-survive-social-media/"> study</a> found out that 90% of businesses saw an increase in exposure and over half saw an increase in sales via social media. If the web design company doesn't have any social media platforms for you to be able to communicate with them, then it's unlikely that you can referrals and reviews from people you know and trust, that's why it's a great tool to see what their customers say about them.

<img class="alignnone size-full wp-image-652" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/media-998990_640.jpg" alt="" width="610" height="442" />
<h2>Support</h2>
Ever purchased an online service before but didn't receive any additional support? When buying a website, you'd expect to receive support from the web design company so that the transition of maintaining it should run smoothly. This sometimes isn't the case and customers find that once they sign off on the project, communication can be limited. We like to go the extra mile so when your website goes live, our web developers will still be available to address any <a href="/fixes-improvements">issues/queries </a>that you may face and ensure that you're fully satisfied with your website.

<img class="alignnone size-full wp-image-653" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/office-594132_640.jpg" alt="" width="610" height="406" />
<h2>Don't compromise quality</h2>
A lot of web design companies say that they can offer a 'one size fits all' website; these websites are low-priced so they don't really offer you much than a template design. The saying "you get what you pay for" is usually applicable with web design. If you're after a professional, user-friendly website that is unique and has longevity then you should expect to invest in a quality website. You shouldn't compromise quality over your budget if you reflect how you want to be perceived by your customers and competitors. For example, if you offer high quality products then your website should be of that same high-quality. It's all about enhancing the user experience for the customer so that you can retain them and not lose them to your competition.
<h2>How are projects managed?</h2>
How your project is managed is a way you can identify whether that web design company is suited to your particular needs. It's likely if the web design company consists of a small team, then they will be able to dedicate more time for your project which could mean less communication barriers between yourself and the web design company.
<h2>Summary</h2>
We hope after you've read our blog, you'll find it much easier to choose a <a href="/bespoke-website">web design company</a> that is a perfect fit for your business. You've just got to think about the project itself; can the web design company achieve what you planned? As the customer. you should be vocal in what exactly you want from your website and it's features; but also be clear about the primary purpose of the website.

We believe that we can accommodate your web specifications and together build a beautiful website, which you can be proud of. If you're still undecided about how to choose the right web design company for your business, feel free to give us a call on 029 2088 6582 or <a class="contact-modal" title="Link to contact form" href="/contact-us">email us</a> and we'd happy discuss any of your website queries.`,
        date: '2016-02-29',
        category: 'Advice'
    },
    {
        slug: 'why-mobile-optimisation-is-crucial-in-retaining-customers',
        title: 'Why mobile optimisation is crucial in retaining customers',
        excerpt: 'Mobile optimisation isn\'t just a trend that a few organisations have adopted, it has become a key element when designing a website as it\'s crucial in retaining customers and staying ahead of your competitors.',
        content: `Mobile optimisation isn't just a trend that a few organisations have adopted, it's become a key element when designing a website. The basis of an optimised mobile page consists of:
<ul>
 	<li>easy-to-read text on the page</li>
 	<li>no horizontal scrolling</li>
 	<li>links should be easy to identify and tap</li>
 	<li>users shouldn't have to magnify the text in order to read it</li>
 	<li>it should have a primary objective</li>
</ul>
<a href="https://www.experiencedynamics.com/blog/2015/03/30-ux-statistics-you-should-not-ignore-infographic" target="_blank" rel="noopener noreferrer">Studies by Vikram</a> identified that mobile users are five times more likely to abandon their task if a site isn't optimised for mobile.

Here's why mobile optimisation is crucial in retaining customers and staying ahead of your competitors:
<h2>Mobile users view websites differently</h2>
Mobile users want to be able to visit a website and gather the information quickly and not have to crawl through lots of pages. They want digestible (bite-size) forms of information that they can easily share through social-media to their friends, followers and online peers. This can be done by providing your customers with an integrated social media sharing tool on your website. <a href="http://www.smartinsights.com/mobile-marketing/mobile-marketing-analytics/mobile-marketing-statistics/">In a report by KPCB</a>, the number of users (51%) who use media on their mobile phones has taken over desktop users.
<h2>Generate traffic to your site</h2>
73% of mobile searches trigger follow-up actions <a href="https://www.experiencedynamics.com/blog/2015/03/30-ux-statistics-you-should-not-ignore-infographic">(mediative)</a>. This could be anything from an online transaction or signing up to your newsletter to simply sharing your content on social media. All these activities are helping your business generate traffic to your site, which is extremely beneficial as mobile searches could potentially take over the traditional desktop search.

<img class="alignnone size-full wp-image-654" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/mac-2.jpg" alt="" width="836" height="557" />
<h2>Better engagement with your target market</h2>
Since the digital age, brands have found it a lot easier to engage with their customers able to engage with their customers. This has been done through social-media platforms such as Facebook and Twitter. What if your target market is 16-24 year old's, who have a high consumption use of their mobile phones and your website isn't mobile-friendly? You are pretty much ignoring your customer needs and they'll be more likely to use a competitor's mobile-friendly website instead.
<h2>Increased amount of mobile users</h2>
<a href="http://www.statista.com/statistics/274774/forecast-of-mobile-phone-users-worldwide/">It is estimated</a> that there will be 5.07 billion mobile users by 2019. Mobiles are no longer used just for phoning and messaging people, but also for purchasing products, sharing content, using applications and much more. Let's use the takeaway juggernaut 'Domino's Pizza' as an example. When you visit their website on a mobile/tablet, their homepage which features the main call-to-actions buttons (CTA) for their menu, offers and your local Domino's. This is a crucial part of optimising the webpage as most users visiting this site on their site have only one intention: to buy some pizza.

<img class="alignnone size-full wp-image-655" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/Mobile-vs-Standard.jpg" alt="" width="836" height="620" />

image courtesy of www.marketingcoach.com
<h2>An unoptimised site can damage the reputation of your brand</h2>
If your business has a great website and brand identity, you may feel that you shouldn't pursue optimising your site for mobile and tablet devices. By not optimising your site for mobile, you risk damaging the reputation of your brand, especially if your brand is perceived as modern and a trend-setter. Over 60% of users have a better opinion of brands if they offer a great mobile experience <a href="https://www.targetingmantra.com/blog/some-eye-popping-statistics-of-mobile-commerce">(targetingmantra)</a>. Understanding what your customer needs is essential when they visit your site on their mobile device.

To stay ahead of your competition and to build greater relationships with your customers, mobile optimisation should be at top of your list when targeting mobile users. We believe that optimising for mobile can be really beneficial for your business as you strive to not just retain your existing customers but also expand your customer base.

Thanks for reading our blog; can you think of any other reasons why you should optimise for mobile?

If you're looking to get your <a href="/contact-us">webpage optimised for mobile</a> or just want some friendly advice on this matter, we'd love to hear from you. Give us a call on <a href="tel:02920886582">029 2088 6582</a> or <a class="contact-modal" title="Link to contact form" href="/contact-us">email us</a>.`,
        date: '2016-02-19',
        category: 'Advice'
    },
    {
        slug: 'how-do-i-choose-the-best-web-hosting-for-my-business',
        title: 'How do I choose the best web hosting for my business?',
        excerpt: 'There are so many web hosting services available on the market, how would you know which one is perfect for your business?',
        content: `There are so many web hosting services available on the market, how would you know which one is perfect for your business? This blog will help simplify the decision of choosing a web hosting provider for your business.
<h2>Is it fast?</h2>
If you've got a brand new website and it's not running to the optimal speed then you have to consider, how does it affect your business? <a href="https://blog.kissmetrics.com/loading-time/">Research shows</a> that over 40% of people will abandon your website, if it takes more than 3 seconds to load (<a href="https://blog.kissmetrics.com/loading-time/">Kissmetrics)</a>. Not only could it lose you customers but could also damage the reputation of your brand. Having a fast and reliable server is vital in the world of E-commerce.
<h2>How safe and secure is the server?</h2>
Knowing that your data/files on your website is safe and secure is pretty much essential. You can never compromise on the security of your website, as it isn't just your business that will be affected but also your customer's details that could get compromised. All of our server packages feature increased server security at no extra cost.

<img class="alignnone size-full wp-image-656" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/safe-and-secure.jpg" alt="" width="800" height="528" />
<h2>Does it provide a backup?</h2>
There's nothing worse than your server going down with an unrecoverable issue, especially if your business depends upon eCommerce. If your web hosting provider does allocate you with a backup solution then you should feel a lot more at ease, knowing that all your files are all backed up and recoverable. At Amity we take it two steps further and other three daily backups for complete peace of mind: one with the hosting company, one on Amazon S3 and a final one on our own dedicated server.
<h2>Does it come with regular maintenance &amp; updates?</h2>
Websites are similar to cars, they need regular maintenance in order to fully function for use. By ensuring that your website is also regularly updated, you can stay on track with the progress of your business and not have to worry about continually updating your website. Each of our packages include regular server updates and additional support from our team. To find out more about the specific support time per month for each server package, you can contact us at theteam@amitywebsolutions.co.uk or phone us for a chat on 029 2088 6582.

<img class="alignnone size-full wp-image-657" src="https://www.amityweb.co.uk/wp-content/uploads/2020/11/regular-maintenance.jpg" alt="" width="800" height="567" />
<h2>Is it monitored?</h2>
A good web hosting provider will frequently monitor your website to identify any issues and resolve them as quickly as possible. This part of hosting is sometimes overlooked, as there are lots of cheap companies online who can't offer this service. Each of our server packages come with monitoring features: our standard package includes monitoring your website every five minutes and with our premium packages we monitor your site every minute, enabling us to get your site back online before your customers even notice.
<h2>Load Balancing</h2>
If you have a particularly resource-intensive website that attracts lots of visitors, they may be pushing the server to it's limits, resulting in slow responses and potential downtime. With load balancing you can have two or more servers servicing your website and/or database in turn, managed by a "load balancer". That is, another server controlling which server the traffic goes to; perfect to spread the load across multiple servers. It's also great for uptime because your site does not have to be taken offline whilst one of the servers is undergoing maintenance.
<h2>Extra features</h2>
These are just some of the additional extras that we provide with our web hosting packages:
<ul>
 	<li>Email accounts if needed</li>
 	<li>additional website optimisation to speed up page load time</li>
 	<li>upgrades on your website content management if applicable</li>
</ul>
The points covered in this blog are just some of the reasons to why we can offer you the fast and reliable servers for your business. We can provide your business excellent <a href="/hosting-server-management">web hosting services</a> at competitive prices, this doesn't matter if you're a SME or a large organisation, we'd love to help you get the hosting that your website deserves. We offer four different web hosting packages:
<ul>
 	<li>Standard hosting- £360+ vat per year</li>
 	<li>Premium hosting- £720 + vat per year</li>
 	<li>Own Cloud/VPS - prices start from £195 + vat per month</li>
 	<li>Own dedicated server- prices start from £395 + vat per month</li>
</ul>
To find out more about our <a href="/hosting-server-management">web hosting packages</a>; give us a call on 029 2088 6582 or drop us an email and we'll be in touch with you shortly.`,
        date: '2016-02-04',
        category: 'Advice'
    },
    {
        slug: '6-reasons-why-bespoke-websites-are-awesome-for-your-business',
        title: '6 reasons why bespoke websites are awesome for your business',
        excerpt: 'This blog will give 6 great reasons to why bespoke websites can be really beneficial to your business, are you giving your customers what they want when they visit your website?',
        content: `When it comes to standing out from your competitors online, having an excellent website can really benefit your business. A lot of websites these days are built using <a href="/wordpress-website">Wordpress themes</a>, which is often the ideal solution if you have a limited budget. If you really want to grab the attention of your customers and online peers then <a href="/bespoke-website">bespoke websites</a> are the way forward. So why exactly are bespoke websites awesome for your business? Here are 6 reasons to consider:
<h2>Crafted for your business</h2>
One of the key reasons why bespoke website are awesome for your business is that they can really give you that competitive edge that you strive towards. Predesigned templates can look fantastic when your content suits the design, but to tower above the competition, your website needs to be built from the ground up, considering your brand at every step. With bespoke websites, your website can work with or even automate your business processes, as well as looking rather unique. They are designed specifically with your customers in mind but also to be easy for you to update.

<img class="alignnone size-full wp-image-689" src="https://www.amityweb.co.uk/wp-content/uploads/2016/01/coding.jpg" alt="" width="800" height="430" />
<h2>Future-proof</h2>
With the implementation of a bespoke website, you don't need to worry about changing the design that often as you would with a template-designed website. This is because your website will be built around your brand, whereas with template-designed websites you would have to change and update in order to sustain your brand identity. Any content you need to add to/remove from your website, can be done in a simple manner through the content management system (CMS).<strong>
</strong>
<h2>User-friendly</h2>
Studies show that (88%) of users are less likely to return to a website if they have a bad experience <a href="http://inspiredm.com/web-design-statistics-infographic/">(Econsultancy)</a>, so it is essential that you are ensure that your website is user-friendly. <a href="/bespoke-website">Bespoke websites</a> are created to give your customers the best possible experience they can have when visiting your website. Simple navigation is key to achieving this, as it's vital your customers are able to find what they are searching for on your website straight away, otherwise you risk losing them to your competitors. You've also got to consider accessibility when it comes to your website, ensuring that your website can be accessed by users who have disabilities or the option to change the language of the page. When designing your bespoke website, we consider these factors so that your website is easy to use for as many people as possible.
<h2>Super-fast</h2>
If your website is going to be very interactive, then a fast and responsive website is crucial. As bespoke websites are built from the ground up, there are no shortcuts when designing responsive sites. Throughout the development of a bespoke website, we look into every single way to make sure that your website is fast as it can possibly be. Did you know that a <a href="https://blog.kissmetrics.com/loading-time/">one-second delay can cost your business 7% of sales</a>?
<h2>Optimised for mobile users</h2>
Optimising your website for mobile users is no longer just a fad, it’s essential. Studies suggest that 83% of the number 1 results on Google SERPs are mobile-friendly (Moovweb). You simply can’t afford not to optimise your website for mobile users, as you risk losing them to your competitors. There’s nothing worse when you visit a website and it’s not mobile-friendly, e.g. having to pinch the screen to zoom in on the content. When a user views a website on their phone, it should have a user-friendly navigation system that is simple to use. It’s often a good idea for the landing page to feature the most important parts of the website, though it’s also very important that no content is hidden.

<img class="alignnone size-full wp-image-688" src="https://www.amityweb.co.uk/wp-content/uploads/2016/01/optimising.jpg" alt="" width="800" height="531" />
<h2>Bespoke applications</h2>
Bespoke applications are web applications built into your website, these include anything from database systems, corporate intranets and membership systems to photo book builders and social networking sites. These systems are created within your website, giving you a great content managed website that’s built around your brand, whilst also having a bespoke tool or system that’s completely tailored to your needs. By integrating your processes online it can help streamline your organisation, increase sales, reduce administration and eventually increase profits.

These are just some of the many reasons why bespoke websites can differentiate your business from your competitors both on/offline. They are also a great way to drive traffic to your site and hopefully lead to an increase in sales. We offer responsive and super-fast <a href="/bespoke-website">bespoke websites</a> that are hand built to the highest quality. We specialise in bespoke websites designed specifically to meet your customer and business needs and we would love to build your next website, to help you reach your online potential. To find out more, <a class="contact-modal" title="Link to contact form" href="/contact-us">Email us</a> or give us a ring on 029 2088 6582 and we can discuss any bespoke projects with you.

Can you think of any more reasons why <a href="/bespoke-website">bespoke websites</a> are awesome? Get in touch with us, we’d love to hear from you.`,
        date: '2016-01-13',
        category: 'Advice'
    },
    {
        slug: 'popular-web-design-trends-of-2015',
        title: 'Popular Web Design Trends of 2015',
        excerpt: 'Trends come and go in web design. We\'ve taken a look back at the most popular of 2015, does your website feature any of these innovative concepts?',
        content: `Did you know just under half (46%) of people said that a website’s design is their main reason for determining the credibility of a business or organisation? <a href="http://www.slideshare.net/NewsCred/50-best-stats-presentation">(Newcred)</a>. That's a lot of people! With this in mind web designers constantly strive to implement new and exciting features onto websites to improve user experience and ultimately increase conversions. Some less effective than others of course (we’re looking at you scroll-jacking)!

So here's our list of what we consider the most popular web design trends of 2015.
<h2>Prominent Call to action buttons</h2>
A prominent button on your website that prompts your users to take part in an “action” can come in variety of ways, including allowing your customer to sign up to your newsletter or a (CTA) as simple as an add to cart function. Call to actions buttons are a great tool to persuade your customers to take action in your products/services and hopefully it will help generate more sales and traffic to your website. Amazon’s buy with 1-Click is an extremely popular CTA button as it speeds up to the process of e-commerce for customers.

<img class="alignnone size-full wp-image-692" src="https://www.amityweb.co.uk/wp-content/uploads/2016/01/amazon-call_to_action.png" alt="" width="238" height="447" />

<em>image courtesy of <a href="http://www.amazon.co.uk" target="_blank" rel="noopener noreferrer">www.amazon.co.uk</a></em>
<h2>Microinteractions</h2>
Ever liked or shared anything online? That’s a microinteraction right there. Whether it’s a liking a cat video on Facebook or a sharing a news story, these interactions are an integral part of all websites and should be implemented in a subtle way. Generally we don’t notice these interactions until they go wrong, but sometimes they can be elevated to highly useable features. For example, <a href="https://www.youtube.com">YouTube</a> automatically pauses the video when a user decides to report it.
<h2>One Page websites</h2>
Another fairly popular trend in web design is taking advantage of having a one page website, that is, all the website pages on one long scrolling page. Website designs in 2015 have seen an insurgence of longer scrolling pages, why? Because users are now preferring to read the content on one single scrolling page as it’s more natural and it keeps them enticed to read the entirety of it. Hopefully this is the start of the end for gallery-view websites that insist on showing one page per sentence.

<img class="alignnone size-full wp-image-693" src="https://www.amityweb.co.uk/wp-content/uploads/2016/01/tinke.jpg" alt="" width="800" height="465" />

<em>image courtesy of <a href="https://www.zensorium.com/product-tinke.html" target="_blank" rel="noopener noreferrer">https://www.zensorium.com/product-tinke.html</a></em>
<h2>User Experience (UX) Design</h2>
UX design is a process that designers use to enhance the customer experience or their satisfaction. This method of design involves creating an interactive and user-friendly journey for customers. According to research by <a href="https://econsultancy.com/site-speed-for-seo-why-it-s-about-more-than-just-loading-times/" target="_blank" rel="noopener">Econsultancy</a>, 88% of online customers are less like likely to return to site after a bad experience. Urban Outfitters have incorporated some stunning UX design on their website: when looking at a product; you can do 360° view of the product. Customers can also zoom in on the products to see them in more detail.

<img class="alignnone size-full wp-image-694" src="https://www.amityweb.co.uk/wp-content/uploads/2016/01/urban-ux.jpg" alt="" width="800" height="537" />

image courtesy of <a href="https://www.urbanoutfitters.com/" target="_blank" rel="noopener">www.urbanoutfitters.com</a>
<h2>Ghost buttons</h2>
Ghost buttons are transparent and empty buttons which consist of basic shapes such as rectangles or squares. It also includes a very thin outline and then text would then be inserted inside of the box. This sleek, simple technique can really make your content stand out.
<h2>Card design (Modular)</h2>
Pinterest famously started this trend and now it’s practically everywhere on the web. By having cards as a design layout, it gives users a chance to easily read digestible information. This trend has also had a huge impact when it comes to designers creating mobile-friendly websites as it allows for simple navigation. This technique is also excellent for sharing content easily, just look at <a href="http://www.androidcentral.com/ultimate-guide-google-now-cards">Google Cards</a>.

<img class="alignnone size-full wp-image-695" src="https://www.amityweb.co.uk/wp-content/uploads/2016/01/pinterest.jpg" alt="" width="792" height="480" />

<em>image courtesy of <a href="http://www.pinterest.com">www.pinterest.com</a></em>
<h2>Responsive Websites</h2>
In April 2015, Google announced that mobile friendly websites will be a ranking factor on mobile phone searches. That is, mobile friendly sites will rank higher than non-mobile friendly sites when searched from mobile devices. Responsive design has enabled designers to create experience optimised for the device being used, whether it be a tablet,  a mobile phone or a super high resolution monitor.
<h2>Hamburger Menu Icon / Mobile Menu on Desktop</h2>
With the growth of responsive design, the hamburger icon has become ubiquitous. For the majority of users, it’s an intuitive way to present the navigation on smaller devices, but for a significant few it can result in the menu being overlooked. The general method involves hiding the navigation, only to show it when the hamburger icon is clicked. Studies show that the word “menu” is more effective - anecdotally we've had 3 clients call up in the last few months reporting that their menu had disappeared, all because they didn't understand the purpose of the hamburger icon.
<h2>Minimalist design</h2>
Minimalist design involves a very clutter-free approach to design, which is ideal for the creative industry as it allows your work to do the talking rather than copious amounts of text. If you are going to utilise this type of design, then you must ensure that you have a clear message on what your website involves, whether you’re selling a product/service or providing information.

<img class="alignnone size-full wp-image-696" src="https://www.amityweb.co.uk/wp-content/uploads/2016/01/nua-bikes.jpg" alt="" width="800" height="491" />

<em>image courtesy of <a href="http://www.awwwards.com/web-design-awards/nua-bikes">http://www.awwwards.com/web-design-awards/nua-bikes</a></em>
<h2>Hero Images</h2>
Hero images have seen an increase in popularity of the last few years; they are basically extra large background images. Designers are using this type of image either to enhance a product/service that they’re selling or to make their brand more personal by using images of themselves or their team. This has meant that stock images on websites are being used far less as they come across cheesy and unnatural.
<h2>Parallax Effect</h2>
This trend first appeared in video games, Super Mario Bros 3 being one of the first games to use this method. The concept is pretty simple: move the background layers at different speeds to give the effect of depth to a 2D scene. It’s now made its way into web design, which implemented in a subtle way,  can be great to engage with your customers through online storytelling.
<h2>One to avoid: Scroll-jacking</h2>
Scroll-jacking is when you scroll on a page but you have no control of the speed that goes at, sometimes you scroll and everything disappears from the screen which can extremely frustrating for the user. Done incorrectly, the page appears to scroll in slow motion, or worse, not at all.  Generally these sites work well in a few situations, but are potentially damaging the user experience for users that fall outside this group as they can’t interact with the content in the way that they desire.

Trends come and go, but a strong brand along with an interactive website will keep users visiting for years. The trends featured in this blog can be used for <a href="/bespoke-website">your new bespoke website</a>; we offer bespoke websites that will help benefit the overall customer experience of your website.

Can you think of any more web design trends? What do you think of our list? Let us know, we’d love to hear from you.`,
        date: '2016-01-05',
        category: 'Advice'
    },
    {
        slug: 'google-to-favour-mobile-websites-april-21st-2015-get-a-responsive-website',
        title: 'Google Search Results will Favour Mobile Websites from April 21st 2015. Get a Responsive Website.',
        excerpt: 'On April 21st Google will be updating its ranking algorithm to favour mobile friendly websites when searched from mobile devices. A responsive website is vital to ensure your Google search rankings on a mobile phone are maintained.',
        content: `On <strong>April 21st</strong> Google will be updating its ranking algorithm to favour mobile friendly websites when searched from mobile devices.

What this means is, when people using a mobile phone or tablet to do web searches, websites which are designed to work well on mobile phones and tablets will be favoured in the search results, and so could rank higher up compared to a search on a desktop computer.

To put it simply, if your competitors are using mobile friendly websites, there is a greater chance they will rank higher when searched from mobile phones. A <strong>non-mobile friendly website</strong> may see visitors <strong>drop</strong> following April 21st.
<h2>Various website statistics put mobile website use between <strong>60 to 80%</strong> in 2014.</h2>
A mobile friendly website is a website that is designed to work well on mobile phones. This mainly takes into account the smaller screen and touch screen functionality. Websites should be designed to be easily read and navigated on a mobile device. No pinch zooming and trying to click that tiny button... but a well structured, clearly readable font and well designed touch buttons to allow users to easily and quickly use a website on mobile phones.

At Amity we design and build <strong>Responsive Websites</strong>. That is, websites which automatically adjust their design for the device used. To give you an example, whilst looking at this website, resize your browser window, make it really thin to replicate a smartphone screen. You will see the site change its design and appearance to fit into the smaller screen and still make it easy to read. The menu changes to a mobile menu, which drops down to reveal the navigation on click. This is a responsive site.

It is extremely important your website is mobile friendly if you want to maintain search rankings when users search on mobile phones. Even if they are not using search to reach your site, it is still extremely important to offer the best user experience for mobile devices if you want to engage with website visitors.

But fear not, it is very unlikely you will need a new website to be responsive! Existing websites may be <strong>converted to responsive websites</strong> easily, depending on the website.

If you would like more information about this, or would like us to quote to change your site to a responsive site, please <a href="/contact-us">contact us</a>.

<img class="alignnone size-full wp-image-699" src="https://www.amityweb.co.uk/wp-content/uploads/2015/04/amity_seo_iphone5_800_optim.jpg" alt="" width="800" height="550" />`,
        date: '2015-04-06',
        category: 'Advice'
    },
    {
        slug: 'new-website-released-for-a-health-conference-in-india-in-april',
        title: 'New Website Released for a Health Conference in India in April',
        excerpt: 'We\'ve released a new site for a health conference taking place in New Delhi in India in April 2015. We\'re especially proud as this was a last minute, urgent request and Amity were able to deliver.',
        content: `We've released a new site for a health conference taking place in New Delhi in India in April 2015.

We were chosen to build the site not only because the customer knew we could deliver the requirements and website to a high standard, but we can do it quickly, less than a week from being contacted.

For this particular project we chose Wordpress with a professional &amp; modern theme to be able to deliver the site quickly. Utilising a feature rich booking system we were also able to provide the event booking facility within the short timescales.

We're especially proud as this was a last minute, urgent request and Amity were able to deliver.

<a href="http://www.universal-health-coverage.org/" target="_blank" rel="noopener noreferrer"><img class="alignnone size-full wp-image-701" src="https://www.amityweb.co.uk/wp-content/uploads/2015/03/universal-health-coverage.png" alt="" width="800" height="859" /></a>`,
        date: '2015-03-26',
        category: 'Amity News'
    },
    {
        slug: 'weve-redesigned-the-amity-website',
        title: 'We’ve Redesigned the Amity Website',
        excerpt: 'A brand new design and built website has been released for Amity Web Solutions. The new site\'s main focus is to better advertise our service offering and be mobile friendly. A mobile friendly site is vital to ensure it maintains a high ranking when searched from mobile phones.',
        content: `Our website has been serving us well for many years, but it's high time we refreshed it in line with our service offering.

A brand new design and built website has been released for Amity Web Solutions. The new site's main focus is to better advertise our service offering and be mobile friendly. <a href="https://www.amityweb.co.uk/blog/google-to-favour-mobile-websites-april-21st-2015-get-a-responsive-website/">A mobile friendly site is vital to ensure it maintains a high ranking when searched from mobile phones</a>.

Core services on offer are:
<ul>
 	<li class="node_web-design-development level_2 has_children first_child"><a href="/web-design-development">Web Design &amp; Development</a>
<ul>
 	<li class="node_bespoke level_3 first_child"><a href="/bespoke-website">Bespoke Websites</a></li>
 	<li class="node_made-to-measure level_3"><a href="/wordpress-website">Wordpress Websites</a></li>
 	<li class="node_off-the-rack level_3 last_child"><a href="/starter-website">Starter Websites</a></li>
</ul>
</li>
 	<li class="node_bespoke-applications level_2"><a href="/bespoke-applications">Web Applications</a></li>
 	<li class="node_hosting-server-management level_2"><a href="/hosting-server-management">Web Hosting &amp; Server Management</a></li>
 	<li class="node_maintenance-support level_2"><a href="/maintenance-support">Maintenance &amp; Support</a></li>
 	<li class="node_consultancy level_2"><a href="/consultancy">Web Consultancy</a></li>
 	<li class="node_fixes-improvements level_2 last_child"><a href="/fixes-improvements">Fixes &amp; Improvements</a></li>
</ul>
In addition to this, we are very pleased to say our site is extremely fast. One of our main capabilities is making websites fast. <a href="/blog/simply-the-fastest-web-design-company-in-south-wales">We have one of the fastest web design websites in South Wales</a>.

If you need a fast, responsive website, then <a href="/contact-us">contact us</a> for more information.

<img class="alignnone size-full wp-image-703" src="https://www.amityweb.co.uk/wp-content/uploads/2015/03/weve-redesigned-the-amity-website-9-3-15.png" alt="" width="800" height="1008" />`,
        date: '2015-03-09',
        category: 'Amity News'
    },
    {
        slug: 'amity-have-expanded-to-a-new-office-in-caerphilly-business-park',
        title: 'Amity Have Expanded to a New Office in Caerphilly Business Park',
        excerpt: 'Amity\'s Web Design in Caerphilly has expanded into a new office with more space, allowing us to offer more web and design related services.',
        content: `Amity are expanding! We've been slowly outgrowing our last place, so we've moved into a much larger office 5 minutes up the road to Caerphilly Business Park. The larger office allows Amity to expand it's service offering to include design services such as marketing, PR, branding design, graphic design, brochure and marketing material design, all which work closely with our core web development services. We now also run web and brand workshops at our new location.

It comes at a good time as it's our 10th anniversary this year too, and we're soon to release a fresh, new website.

Our new address is <strong>Amity Web Solutions, Suite 1, Block B, Caerphilly Business Park, Caerphilly, CF83 3ED</strong>. Here's a sneak peak of the office and team.

<img class="alignnone size-full wp-image-706" src="https://www.amityweb.co.uk/wp-content/uploads/2015/02/amity-office-feb2015.jpg" alt="" width="800" height="198" />`,
        date: '2015-02-28',
        category: 'Amity News'
    },
    {
        slug: 'amity-servers-are-patched-for-the-ghost-vulnerability',
        title: 'Amity Servers are patched for the GHOST vulnerability',
        excerpt: 'The GHOST vulnerability, which exploits a weakness in a Linux package called glibc, has been slimed. Amity servers have been eradicated of GHOST.',
        content: `<p>The GHOST vulnerability, which exploits a weakness in a Linux package called glibc, has been slimed! We have eradicated the GHOST on Amity Servers.&nbsp;</p>
<p>GHOST takes advantage of a vulnerability in the glibc software in Linux. Our web hosting servers run Linux, but fear not, we have updated the servers as soon as we heard about this and they back to being top notch secure hosting servers.&nbsp;</p>
<p>More information can be found here&nbsp;<a href="http://www.zdnet.com/article/critical-linux-security-hole-found/" target="_blank" rel="noopener noreferrer">http://www.zdnet.com/article/critical-linux-security-hole-found/</a></p>`,
        date: '2015-01-30',
        category: 'Amity News'
    },
    {
        slug: 'amity-servers-are-safe-after-patching-servers-for-the-poodle-bug',
        title: 'Amity servers are safe after patching servers for the POODLE bug',
        excerpt: 'A new security threat to web servers worldwide has recently been discovered. It\'s called POODLE and is a security flaw in SSLv3 commonly used to secure encryption between users computers and websites when using https:// connections.',
        content: `<p>A new security threat to web servers worldwide has recently been discovered. It's called POODLE and is a security flaw in SSLv3 commonly used to secure encryption between users computers and websites when using https:// connections. Encryption is necessary with eCommerce sites or any other site that passes sensitive data from a user to the website such as a login form. https:// is denoted by the the padlock symbol in the address bar.</p>
<p>Well, good news, we have already patched all our web and mail servers so we are not open to the vulnerability anymore. We have disabled the use of SSLv3 and use another secure protocol.&nbsp;</p>
<p>Just another advantage of being hosted with Amity ;)</p>
<p>More information about POODLE can be found here&nbsp;<a href="http://en.wikipedia.org/wiki/POODLE" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/POODLE</a>&nbsp;and&nbsp;<a href="http://www.bbc.co.uk/news/technology-29627887" target="_blank" rel="noopener noreferrer">http://www.bbc.co.uk/news/technology-29627887</a>.</p>
<p>&nbsp;</p>`,
        date: '2014-10-25',
        category: 'Amity News'
    },
    {
        slug: 'amity-servers-are-safe-after-patching-servers-for-shellshock-bug',
        title: 'Amity servers are safe after patching servers for Shellshock bug',
        excerpt: 'A new major security threat to web servers worldwide has recently been discovered. It\'s called Shellshock and is a security flaw in Bash, the common shell script used in millions of Linux and Mac computers. It is estimated 500 million computers could be affected.',
        content: `<p>A new major security threat to web servers worldwide has recently been discovered. It's called Shellshock and is a security flaw in Bash, the common shell script used in millions of Linux and Mac computers. It is estimated 500 million computers could be affected.&nbsp;</p>
<p>Well, good news, we have already patched all our web and mail servers so we are not open to the vulnerability anymore.</p>
<p>Just another advantage of being hosted with Amity ;)</p>
<p><a href="https://www.google.co.uk/search?num=50&amp;es_sm=119&amp;q=shellshock+bug&amp;oq=shellshock+bug&amp;gs_l=serp.3..0i3j0i22i30l2j0i22i10i30j0i22i30.8042.10352.0.10478.8.6.2.0.0.0.62.332.6.6.0....0...1c.1.54.serp..1.7.292.udHJ6EuJ56o" target="_blank" rel="noopener noreferrer">More information on Google</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>`,
        date: '2014-09-25',
        category: 'Amity News'
    },
    {
        slug: 'icann-suspending-unverified-domain-names',
        title: 'ICANN Suspending Unverified Domain Names',
        excerpt: 'ICANN, the company responsible for managing domain names and their addresses globally, have recently imposed a controversial requirement which is resulting in many websites going down.',
        content: `<p><a href="https://www.icann.org" target="_blank" rel="noopener noreferrer">ICANN</a> is responsible for managing domain names and their addresses globally and recently they have imposed quite a controversial requirement which is resulting in many websites going down. ICANN state all ICANN accredited registrars are now required to validate a registrant's contact details. If the domain owner does not validate it within 15 days of receiving the notice, then ICANN will suspend the domain resulting in all email accounts and websites for that domain going down. Yes, I did say it was controversial!</p>
<p>The list of top level domains affected can be found <a href="https://www.icann.org/registrar-reports/accredited-list.html" target="_blank" rel="noopener noreferrer">here</a>. Amity customers will generally be .com, .net, .org and .biz.&nbsp;</p>
<p>Most domain owners would have received an email explaining this and the process to verify, so if the process was followed the domain should be OK. But many domain owners do not have access to the email address they registered the domain on, or may have ignored the email due to not understanding it or considering it a scam, and so have not verified the domain. In this case the domain names are being suspended.</p>
<p>We are alerted to this issue by our <a href="http://www.amityweb.co.uk/blog/new-website-monitoring-system-developed-by-amity" target="_blank" rel="noopener noreferrer">website monitoring system</a>, so we can immediately inform the customers who manage their own domains that they need to verify their domains, but nevertheless the best approach is to check and verify your domain contact details before it goes down.&nbsp;</p>
<p>So if you manage a .com, .net or other ICANN domain name, make sure you have verified the domain, and the domain contact email is up to date for future notifications.&nbsp;</p>
<p>Read more information <a href="https://www.icann.org/resources/pages/non-response-2014-01-29-en" target="_blank" rel="noopener noreferrer">here</a></p>`,
        date: '2014-09-22',
        category: 'Hosting'
    },
    {
        slug: 'want-to-join-the-team',
        title: 'Want to join the team?',
        excerpt: 'We are looking for a graduate to join our team as a Sales and Marketing Executive....',
        content: `<p>We are looking for a graduate to join our team as a Sales and Marketing Executive. You will be required to help develop and improve the marketing material used such as brochures, flyers, quotes, presentations, case studies, website content, email newsletters and scripts.&nbsp;</p>
<p><strong>Duties will include:</strong><br /> &bull; Planning and undertaking marketing strategies and campaigns.&nbsp;<br /> &bull; Customer requirements analysis (identify target customers and services).<br /> &bull; Direct marketing - emails, phone calls, letters, brochures, person to person.&nbsp;<br /> &bull; Indirect marketing - website content, social media, blogging, networking, newsletters, online advertising and print advertised.<br /> &bull; Manage and respond to sales enquiries.<br /> &bull; Other marketing and sales related duties and general support of the company operations. &nbsp;</p>
<p><strong>Essential Skills:</strong><br /> &bull; Experience of sales and marketing.<br /> &bull; Full UK driving licence.<br /> &bull; Capacity to understand basic technical aspects of web development.</p>
<p><strong>Desirable Skills:</strong><br /> Understanding of websites and website content management.</p>
<p><strong>Salary:</strong></p>
<p>Negotiable depending on experience.</p>
<p><strong>Interested?</strong></p>
<p>If you think you're just what we're looking for, please <a href="mailto:laurence@amitywebsolutions.co.uk?subject=Vacancy%20for%20Sales%20and%20Marketing%20Executive">contact us</a>.</p>`,
        date: '2014-08-26',
        category: 'Amity News'
    },
    {
        slug: 'speed-test-comparison-with-budget-hosting-provider',
        title: 'Speed Test Comparison with Budget Hosting Provider',
        excerpt: 'A customer recently moved hosting to a budget hosting company, so we took the opportunity to do a speed test before and after',
        content: `A customer recently moved hosting to a budget hosting company due to having used them for so long, despite some recommendations to stay based on our hosting being superior. So we took the opportunity to run a speed test comparison on the website before and after. The results surprised a lot more than we thought! The website was responding at approx. 0.38s when hosted with Amity, but after moving to the budget hosting company, the website consistently responded at over 1s.

We can't stress enough that web hosting is crucial for your business. Proven statistics show as websites slow down in response time, <a href="http://www.websiteoptimization.com/speed/tweak/psychology-web-performance/" target="_blank" rel="noopener">visitors</a> and <a href="http://blog.kissmetrics.com/wp-content/uploads/2011/04/loading-time-lrg.jpg" target="_blank" rel="noopener">sales drop</a>! It is vital to find a fast and reliable web hosting partner to ensure your website not only stays up, but stays fast, and retains websites visitors.

<img class="alignnone size-full wp-image-709" src="https://www.amityweb.co.uk/wp-content/uploads/2014/07/34SP-speed-comaparison-july-2014.png" alt="" width="666" height="798" />
<p class="h2">Edit: 24 Hours Later</p>
Since switching 24 hours ago, the site has gone down 10 times with a total of 1hr 39m downtime!

<img class="alignnone size-full wp-image-710" src="https://www.amityweb.co.uk/wp-content/uploads/2014/07/budget-host-downtime-comparison.png" alt="" width="666" height="475" />`,
        date: '2014-07-17',
        category: 'Hosting'
    },
    {
        slug: 'better-website-uptime-with-amitys-managed-dns-backup-service',
        title: 'Better Website Uptime with Amity’s Managed DNS Backup Service',
        excerpt: 'Have you considered what would happen if the server hosting your domain name went down or had a network issue? Anyone looking for your website would get the dreaded \'page not found\' message. Read on to find out how, with Amity\'s DNS backup service, this isn\'t a problem.',
        content: `<p>Have you considered how your domain name can affect website uptime, not just the web hosting server?</p>
<p>A domain name is a crucial aspect of web hosting, it manages details of where your web hosting and email servers are located in order for web users to connect to your website and send you emails. Think of it like a telephone directory holding the number people can contact you on. Without these details, when a user enters your domain name, their browser or emails just won&rsquo;t know how to find your website or where to send emails. They see the dreaded "page not found&rdquo; message!</p>
<p>The domain settings are managed by a &ldquo;nameserver&rdquo; and is often the company you registered the domain with, but it doesn&rsquo;t have to be. It is common to designate an alternative company to manage domain name settings (DNS).</p>
<p>The problem is, if the nameserver that manages your domain name settings goes down or has a network issue, then your website and emails will go down because browsers won&rsquo;t be able to retrieve the details of the server your website and emails are hosted on.</p>
<p>That&rsquo;s where Amity&rsquo;s DNS backup service for our premium web hosting customers comes in. We designate multiple and (importantly) unrelated nameservers to control the domain name settings. In effect, two different &ldquo;telephone directories&rdquo; are holding the details where your website and emails are.</p>
<p>&ldquo;How does this help my website stay up more often?&rdquo; I hear you ask&hellip; Well, as stated, if your nameserver goes down for whatever reason, other servers in the internet don&rsquo;t know where to send the user visiting your site or to send emails. But having two or more unrelated nameservers managing the domain settings means when one is down, servers just look up the details with the other, and then connect the user.</p>
<p>In our experience we often see DNS issues. Sometimes they are brief, where a website goes down for 5 minutes or so, sometimes they go down for a lot longer when the domain company is under a denial of service attack from malicious users and hackers. It happens often.</p>
<p>Having DNS backup will mean your website and emails will still stay up and be accessible by everyone even when one of the nameserver companies go down.</p>
<p>All our premium hosted customers that we manage domains for have DNS backup using the original domain registration company and Rackspace DNS, a leading provider of cloud services, ensuring our customers and websites have even more uptime.</p>
<p>To find out more about our premium web hosting, please <a href="/contact-us" title="Link to contact form" class="contact-modal">email us.</a></p>`,
        date: '2014-06-30',
        category: 'Hosting'
    },
    {
        slug: 'amity-takes-backup-two-steps-further',
        title: 'Amity takes backup two steps further',
        excerpt: 'Backup, backup, backup! We always hear about it and we all know the importance of it. But did you know that Amity goes further than most other companies to provide additional levels of backup to ensure that your website is never compromised?',
        content: `<p>Backup, backup, backup! &nbsp;We always hear about it and we all know the importance of it. &nbsp;So many companies still don't do it (or do it satisfactorily anyway!) At Amity we take backup seriously. &nbsp;We know that, in the very unlikely event that any of our servers were to have major issues, we may need to rely on our backups to get going again quickly. &nbsp;It's not just our customers who would be affected, but Amity's good reputation too. &nbsp;So at Amity we take backup seriously and go two steps further than most other companies to ensure our customers' websites are backed up:&nbsp;&nbsp;</p>
<p><strong>Server host backup (server level)</strong><br /> We use industry leading server provider Linode.com for our web hosting and email servers. In our many years of experience with web hosting, Linode have so far been the most reliable and efficient servers we&rsquo;ve used. We do not often experience issues with Linode. But in the event something major does happen, all our Linode servers use their server backup system that takes a snapshot of each server every night, and makes it available to re-deploy to a new server quickly. What this means is, in the event of a major server issue, we can just use the previous nights snapshot to restore the server to a new server and be up and running quickly. This has never happened, but we have it just in case. 3 backups are saved - the previous night, the previous Sunday, and the Sunday before that.</p>
<p><strong>Amazon S3 Backup (account level)</strong><br /> We then also take per account backups and store them on Amazon S3. A full backup is taken once per week (on Sundays) and then incremental backups taken each night. A per account backups means each customer&rsquo;s web hosting account is backed up and saved on Amazon S3 separately from everyone else&rsquo;s. So in the event of a major issue on a customer website (and not server wide), we can restore a customer&rsquo;s web hosting account from backup to the previous night&rsquo;s state. This has also never happened! But we have it just in case. We retain the backup files for 14 days.</p>
<p><strong>Office Backup (file level)</strong><br /> Each server is additionally backed up to our office server on a per file basis. That is, all files and databases for a customer&rsquo;s website are saved to our office server, so in the event of a file or database issue we can restore that customer&rsquo;s individual file and database. We store files for 14 days. What this means is, if a customer accidentally deletes a file (perhaps an image), we can easily restore it for them within 14 days of the deletion. This backup we have and still do use, we do occasionally have requests to restore files which customers have accidentally deleted from their account. It&rsquo;s a fantastic service.</p>
<p><strong>Load Balancing Servers</strong><br /> We can even go one step further and offer Load Balancing servers for customers upon request. Load Balancing is having two servers that mirror each other, and distribute the load equally between the two mirrored servers. This setup means even if a server would fail, the customers sites are still up and being serviced from the second mirrored server whilst the first one is restored. Load balancing is available upon request.</p>
<p>Also available upon request (or using the web hosting control panel) is the ability for customers to receive a backup file of their website account to give even further peace of mind.</p>
<p>Note - all 3 backup processes are only applicable to our new Linode servers. We do have several older servers not with Linode that do not benefit from the Amazon S3 backup, but do have server and file level backups.</p>`,
        date: '2014-06-16',
        category: 'Hosting'
    },
    {
        slug: 'amitys-secure-web-servers',
        title: 'Amity&#8217;s secure web servers',
        excerpt: 'So, you\'ve heard of the Heartbleed bug and now you want to know what to do about it? Read on to find out more, and to see what Amity is doing to help our own customers out...',
        content: `<p>You&rsquo;ve all probably heard of the Heartbleed bug (see <a href="http://www.bbc.co.uk/news/technology-26969629" target="_blank" rel="noopener noreferrer">BBC News</a>) and you&rsquo;ve all probably been inundated with emails from website providers the past week giving you a run down, telling you what they&rsquo;ve done to fix it and pointing out how secure your data is!&nbsp; Well, it&rsquo;s our turn now!&nbsp; We won&rsquo;t go into too much detail about the Heartbleed bug, you can find out more information <a href="http://heartbleed.com/" target="_blank" rel="noopener noreferrer">here</a>, only that it is a vulnerability in software called OpenSSL which encrypts data using SSL certificates that most websites use.</p>
<p>We would like to inform you we have patched all our servers where necessary so <strong>Amity web servers are not affected by the Heartbleed bug</strong>. We patched them as soon as the hype about Heartbleed started to pick up last week. Not all of our servers were affected, but those that were have all been upgraded to the latest OpenSSL software that fixes the issue.</p>
<p>Whilst emailing about security we thought it a good opportunity to highlight <strong>what we do at Amity to ensure the security of our websites and servers</strong>:-</p>
<p>1. Ensure server operating system and software are all <strong>updated to the latest versions often</strong><br /> 2. <strong>Prevent unauthorised access</strong> to any control panel login screens, FTP or SSH uploads, only approved IP addresses are allowed - this one was is one of our favourites, highly effective and a result of a lot of research by us<br /> 3. Use <strong>firewalled servers</strong> with many preventative measures in place, such as banning users after several failed login attempts<br /> 4. Create <strong>passwords</strong> which are a long string of random characters and numbers<br /> 5. <strong>Three backups</strong> for securing data - we backup to the server hosting providers, Amazon S3 and to another server, just to be sure!<br /> 6. We <strong>do not install any unnecessary server software</strong>, but only what we need to run websites and operate the server<br /> 7. We make the most of <strong>virus scanning servers</strong> which searches for malicious code on websites, and quarantine any suspect files<br /> 8. We keep each customer&rsquo;s <strong>website entirely separate</strong> from every other customer&rsquo;s website so in the very remote chance that one did get affected, it would not affect any of the others.</p>
<p>What we can&rsquo;t do is update customer website software on a regular basis at no cost (e.g content management system). We ask customers to request that we upgrade their website software often. <strong>It is vital that website content management systems are kept up to date</strong>. The biggest cause of websites being compromised is old and vulnerable website software.</p>
<p><br /> &nbsp;</p>`,
        date: '2014-04-15',
        category: 'Hosting'
    },
    {
        slug: 'amity-one-of-the-best-in-website-uptime',
        title: 'Amity one of the best in website uptime',
        excerpt: 'Uptime dramatically varies between different website providers - and Amity is one of the best around! We\'ve monitored the uptime of our website compared to 15 other websites in South Wales and the results are very interesting...',
        content: `Following on from our blog post <a href="/blog/simply-the-fastest-web-design-company-in-south-wales" target="_blank" rel="noopener noreferrer">measuring website speed</a>, we decided to measure uptime of the websites as this is also a very good indication of the quality of web hosting.

So over the past two weeks from 24th March to April 7th 2014, we have monitored the uptime of our website compared to 15 other similar websites in our area (<strong>5 web design websites</strong> from each of <strong>Cardiff</strong>, <strong>Newport</strong> and <strong>Caerphilly</strong>).

It is important to note that there is no such thing as 100% uptime. Everyone will experience downtime at some point or another - after all, websites are only hosted on computers and we all know computers have issues!  Servers also need maintenance and upgrades which are likely to incur planned downtime. What is important is that the duration and frequency of downtime, and the speed of recovery, are minimised.  So when a website server has an issue (which it will) the important factors are how quickly that issue is resolved, how fast your website comes back online and how rarely issues like this would occur.

As you can see from our results, uptime dramatically varies between different website providers. The lowest downtime (which includes Amity Web Solutions) is 1 or 2 minutes and the highest being over 7 hours! I think it is reasonable to expect the customers of these companies to have similar uptime issues.

Any downtime could result in business loss. A potential customer could visit a website at its moment of downtime, and with no website available, that visitor would move onto the next provider and spend their money there. The more downtime your website has, the more business you are likely to lose. <strong>If your website is a popular eCommerce site the loss could run into thousands of pounds per hour, or even per minute.</strong>

So please do not underestimate the importance of website hosting. It is extremely important that businesses have a high standard of website hosting with <strong>minimum downtime and fast recovery</strong>. Factors of a high standard website hosting service would be a good server provider and server and website monitoring systems to alert the server administrators of potential issues.

<strong>Comparison of 15 Website Developers Websites Uptime</strong>
<table class="table full-width" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td><strong>Website</strong></td>
<td><strong>Response Time (ms)</strong></td>
<td><strong>Uptime (%)</strong></td>
<td><strong>Downtime (minutes)</strong></td>
</tr>
<tr>
<td>Webjects</td>
<td>118.0</td>
<td>99.996</td>
<td>1.0</td>
</tr>
<tr>
<td>Amity Web Solutions</td>
<td>100.0</td>
<td>99.993</td>
<td>2.0</td>
</tr>
<tr>
<td>Ozum</td>
<td>154.0</td>
<td>99.993</td>
<td>3.0</td>
</tr>
<tr>
<td>Cardiff Web Design</td>
<td>440.0</td>
<td>99.988</td>
<td>5.0</td>
</tr>
<tr>
<td>Orange Drop</td>
<td>991.0</td>
<td>99.96</td>
<td>17.0</td>
</tr>
<tr>
<td>eInfinity</td>
<td>413.0</td>
<td>99.959</td>
<td>17.0</td>
</tr>
<tr>
<td>IC Web Design</td>
<td>419.0</td>
<td>99.957</td>
<td>18.0</td>
</tr>
<tr>
<td>Inky Blue Design</td>
<td>132.0</td>
<td>99.957</td>
<td>18.0</td>
</tr>
<tr>
<td>Studio 18 Eighty</td>
<td>112.0</td>
<td>99.953</td>
<td>20.0</td>
</tr>
<tr>
<td>Innivo</td>
<td>70.0</td>
<td>99.926</td>
<td>31.0</td>
</tr>
<tr>
<td>Bluegg</td>
<td>771.0</td>
<td>99.895</td>
<td>45.0</td>
</tr>
<tr>
<td>Web Box Digital</td>
<td>485.0</td>
<td>99.873</td>
<td>54.0</td>
</tr>
<tr>
<td>Simon M Lewis</td>
<td>133.0</td>
<td>99.782</td>
<td>93.0</td>
</tr>
<tr>
<td>Spin Dogs</td>
<td>803.0</td>
<td>99.7</td>
<td>129.0</td>
</tr>
<tr>
<td>Pule Web Design</td>
<td>446.0</td>
<td>99.433</td>
<td>244.0</td>
</tr>
<tr>
<td>Creo</td>
<td>1112.0</td>
<td>98.968</td>
<td>445.0</td>
</tr>
</tbody>
</table>
<em>* Note: timings include planned downtime, such as server maintenance, and website monitoring occurs every 1 minute so 5 seconds or 55 seconds = 1 minute downtime reported.</em>

<strong>Amity Web Solutions' Server Monitoring Screenshot</strong>

<img class="alignnone size-full wp-image-713" src="https://www.amityweb.co.uk/wp-content/uploads/2014/04/servermonitoringsystem.jpg" alt="" width="640" height="423" />
<strong>Amity Web Solutions' Website Monitoring Screenshot</strong>

<img class="alignnone size-full wp-image-712" src="https://www.amityweb.co.uk/wp-content/uploads/2014/04/Sites.jpg" alt="" width="640" height="352" />`,
        date: '2014-04-07',
        category: 'Hosting'
    },
    {
        slug: 'web-hosting-with-amity-just-got-better',
        title: 'Web hosting with Amity just got better!',
        excerpt: 'Now that we know we\'re one of the fastest websites in South Wales, we\'ve decided to make all our Premium Hosting sites super quick!',
        content: `<p>Following on from our recent post about being one of the fastest websites in South Wales (click <a href="/blog/simply-the-fastest-web-design-company-in-south-wales" target="_blank" rel="noopener noreferrer">here</a>), we have now decided to roll out the work we did for this to all Premium Hosting customers.</p>
<p>That's right... if you take out premium web hosting with Amity Web Solutions your site will be blazing fast once we finish with it! See our <a href="/blog/web-hosting-costs" target="_blank" rel="noopener noreferrer">web hosting services</a> for more information.</p>`,
        date: '2014-03-17',
        category: 'Hosting'
    },
    {
        slug: 'simply-the-fastest-web-design-company-in-south-wales',
        title: 'Simply the fastest web design company in South Wales!',
        excerpt: 'A comparison of just how fast Amity websites are against other South Wales web designers....',
        content: `Did you know that when somebody visits your website, you have (according to recent speed tests performed by <a href="http://blog.kissmetrics.com/loading-time/" target="_blank" rel="noopener noreferrer">Kissmetrics</a>) approximately 1 second to show them something they’re interested in before their attention begins to waiver and they go to another site…    This is what they actually said:

<em>• "40% of people abandon a website that takes more than 3 seconds to load”
• “a 1 second delay in page response can result in a 7% reduction in conversions”</em>

It is therefore hugely important that businesses have fast, websites, and they must also be reliable, secure and backed up! It ensures website visitors can use the site easily and are not frustrated with slow website load times. You’ve seen it -  amazing websites that have high investment being hosted on slow budget servers with frequent downtime, so you just don’t wait to see it, however fab it might be.

At Amity we therefore strive to provide the best hosting solution for our customers, with four key points in mind:

<strong>• Fast
• Reliable
• Secure
• Backed up</strong>

Fast is a favourite benefit of ours, it’s an immediate and noticeable effect and makes browsing websites a pleasure. More importantly, as we pointed out above, it reduces website bounce rates (that’s your visitor disappearing off elsewhere!)

Confident that we provide fast websites, we performed a comparison test of our own website against 15 leading South Wales design agencies. We decided to take the top 5 web design companies listed in Google for “<strong>web design caerphilly</strong>", “<strong>web design cardiff</strong>” and “<strong>web design newport</strong>”. Using our favourite website speed comparison site '<a href="http://whichloadsfaster.info/" target="_blank" rel="noopener noreferrer">Which Loads Faster</a>' we were able to run 10 speed tests per site to obtain an average.

We are very pleased to list the results…
<table class="table full-width" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<th>Website</th>
<th>Average Speed (10 Runs)</th>
<th>Town</th>
</tr>
<tr>
<td>http://www.amityweb.co.uk/</td>
<td>190 ms</td>
<td>Caerphilly</td>
</tr>
<tr>
<td>http://www.pulsewebdesign.com/</td>
<td>350 ms</td>
<td>Newport</td>
</tr>
<tr>
<td>http://www.inkybluedesign.co.uk/</td>
<td>389 ms</td>
<td>Caerphilly</td>
</tr>
<tr>
<td>http://www.simonmlewis.co.uk/</td>
<td>443 ms</td>
<td>Caerphilly</td>
</tr>
<tr>
<td>http://www.studio19eighty.co.uk/</td>
<td>535 ms</td>
<td>Caerphilly</td>
</tr>
<tr>
<td>http://www.icwebdesign.co.uk/</td>
<td>691 ms</td>
<td>Newport</td>
</tr>
<tr>
<td>http://www.spindogs.co.uk/</td>
<td>700 ms</td>
<td>Cardiff</td>
</tr>
<tr>
<td>http://www.einfinity.co.uk/</td>
<td>761 ms</td>
<td>Caerphilly</td>
</tr>
<tr>
<td>http://www.innivo.com/</td>
<td>774 ms</td>
<td>Newport</td>
</tr>
<tr>
<td>http://www.ozum.co.uk/</td>
<td>839 ms</td>
<td>Newport</td>
</tr>
<tr>
<td>http://www.webjects.co.uk/</td>
<td>872 ms</td>
<td>Cardiff</td>
</tr>
<tr>
<td>http://bluegg.co.uk/</td>
<td>955 ms</td>
<td>Newport</td>
</tr>
<tr>
<td>http://www.creo.co.uk/</td>
<td>990 ms</td>
<td>Cardiff</td>
</tr>
<tr>
<td>http://orangedrop.co.uk/</td>
<td>1054 ms</td>
<td>Caerphilly</td>
</tr>
<tr>
<td>http://cardiff-web-design.co.uk/</td>
<td>1713 ms</td>
<td>Cardiff</td>
</tr>
<tr>
<td>http://www.webboxdigital.com/</td>
<td>1914 ms</td>
<td>Cardiff</td>
</tr>
</tbody>
</table>
&nbsp;

Could Amity Web Solutions be the fastest web design website in South Wales? Oh yes…`,
        date: '2014-03-03',
        category: 'Hosting'
    },
    {
        slug: 'dedicated-email-server-introduced',
        title: 'Dedicated Email Server Introduced',
        excerpt: 'We have created a dedicated email server to host email accounts on. Any hosting accounts created will now have the website hosted on a web server, and the email accounts hosted on our email server. You won’t feel a thing - your emails will appear just the same as before!',
        content: `You have a website, and you have emails, we know that the two go hand in hand. However, they have different requirements from your server - your website needs speed but not necessarily space, whereas email takes up space but doesn't particularly need speed.

Every time your computer receives an email, a virus scan is run to check that it’s clean. So, if you have a particularly busy inbox one day, the CPU (processing unit) and RAM (memory) usage on the server can be quite high scanning and checking all the emails which will, in turn, affect other services, most notably the speed of your website.

Therefore we have created a dedicated email server to host email accounts on. Any hosting accounts created will now have the website hosted on a web server, and the email accounts hosted on our email server.  You won’t feel a thing - your emails will appear just the same as before!

There are several benefits to hosting email elsewhere...
<ul>
 	<li>No more CPU and RAM used up by the spam and virus scanners on the web servers, so your website will regularly be faster and more reliable</li>
 	<li>If a server needs to temporarily pause (for example for maintenance) then only the website will be affected and emails will keep operating, or vice versa</li>
 	<li>The web server can be further fine tuned for web hosting functions to increase speed knowing email functions wont be affected</li>
 	<li>The email server can have more CPU and RAM dedicated to email processing, allowing us to fine tune the server for email functions</li>
</ul>
This new innovation is part of our <a href="http://www.amityweb.co.uk/blog/web-hosting-costs" target="_blank" rel="noopener noreferrer">web hosting service</a> and our continued efforts to provide a better, faster and reliable web and email hosting service.`,
        date: '2014-02-24',
        category: 'Emails'
    },
    {
        slug: 'new-website-monitoring-system-developed-by-amity',
        title: 'New Website Monitoring System Developed by Amity',
        excerpt: 'New web hosting services developed to monitor all of our websites and alert us of any issues immediately.',
        content: `<p>We are very pleased to announce that we've improved our <a href="/blog/web-hosting-costs" target="_blank" rel="noopener noreferrer">web hosting services</a> yet again by developing our own <strong>bespoke, self hosted website monitoring system</strong> that monitors all of our hosted websites every few minutes and alerts us when a website is down so that we can investigate the issue right away.</p>
<p>The problem with third party monitoring systems is the escalating cost as more and more domains are monitored. Therefore many web developers will only choose a select few (if any!) websites to monitor which sometimes means that a website could be down for hours or days before someone notices.</p>
<p>We do, of course, already use third party website monitoring systems (Pingdom, CopperEgg, Nodeping), but as we have <strong>over 500 domains</strong> to monitor at Amity, the cost is significant and we can&rsquo;t use it for every website. However, with our new <strong>in-house developed monitoring system</strong>, we can monitor ALL domains at no additional cost to customers. We then use third party monitoring systems to monitor our monitoring system!</p>
<p>Although website issues with Amity are rare, as with anyone else they can happen, and we would prefer to know about it immediately rather than hours later from someone else. So whether the domain has expired, the DNS incorrectly configured, DNS outages or there&rsquo;s a problem on the website itself, <strong>we can be notified within a few minutes</strong> and <strong>investigate the issue and fix it straight away</strong>.</p>
<p>Combined with our other <a href="/blog/web-hosting-costs" target="_blank" rel="noopener noreferrer">web hosting services</a> it means our customers' websites&rsquo; <strong>uptime is even greater now</strong> if hosted with Amity.</p>
<p>All websites will be monitored every 15 minutes, premium hosted sites will be monitored every single minute of every day (along with all the other benefits of <a href="/blog/web-hosting-costs" target="_blank" rel="noopener noreferrer">premium hosting</a>) - if you host your website with Amity, we&rsquo;ll know if there&rsquo;s a problem before you do!</p>
<p>&nbsp;</p>`,
        date: '2014-02-17',
        category: 'Hosting'
    },
    {
        slug: 'safer-internet-day',
        title: 'Safer Internet Day',
        excerpt: 'Simple and easy steps to make your home internet safe for all the family.',
        content: `Did you know that it’s <a href="http://www.saferinternet.org/safer-internet-day" target="_blank" rel="noopener noreferrer">Safer Internet Day</a> on Tuesday 11th Feb 2014? This reminds us to look after our younger ones at home not only on the main computer, but also on the many other internet enabled devices in the house - other computers, laptops, tablets, Xboxes, Playstations, phones, eBooks, and even internet enabled fridges! It's vital these devices are protected from content that you would prefer your children not to see.

Being a web design and development company in Caerphilly we know a thing or two about how to protect people from undesired content online. A traditional approach would be to install software on a computer to "lock it down”, but this would be tricky on tablets, smartphones and gaming consoles. With so many internet enabled devices in the house, it would take ages locking down every single one...

We recommend filtering undesired content at the router level - cutting out certain websites before they even reach your home. The government are currently introducing plans to do this, but its taking a long time.  There is, however, a neat solution that's available today, is free to use and easy to set up. Companies such as <a href="https://www.opendns.com/" target="_blank" rel="noopener noreferrer">OpenDNS</a> offer a free service to filter out certain categories of websites at the router level before they even reach your home. This way, instead of using your ISP connection (which may not filter content), you will be served websites by OpenDNS (who do filter content). All you need to do is change your home router DNS IP addresses to the OpenDNS IP address. Whilst this may sound complicated and daunting, don't be put off - OpenDNS even provide a handy "how to" step-by-step guide for your particular brand of router, so follow the instructions and happy safe browsing!`,
        date: '2014-02-10',
        category: 'Advice'
    },
    {
        slug: 'my-new-website-is-not-indexed-on-google',
        title: 'My New Website is Not Indexed on Google?',
        excerpt: 'We are often asked why new websites are not indexed in Google shortly after they go live. So this blog post aims to explain a couple of common reasons such as Google not indexing the site yet, or the site not optimised for the search phrase in question.',
        content: `Your shiny, new and wonderful website is all finished and live, the launch party is over, yet when you search for it on Google you can't find it! It must be a huge disappointment to put all that effort in not to have it found on search engines right away.

This is in fact quite normal and can depend on many factors, here are the two most common reasons why your website may not be indexed in Google right away.
<p class="h2">Google Has Not Visited the Site to Index it Yet</p>
This is likely the most common reason. Google doesn't know about the new site, so it wont have added it to the index. Google discovers new websites by several means…
<ol>
 	<li>Using a website submission form at <a href="https://www.google.com/webmasters/tools/submit-url?continue=/addurl&amp;pli=1" target="_blank" rel="noopener noreferrer">https://www.google.com/webmasters/tools/submit-url?continue=/addurl&amp;pli=1</a>. Generally your web developers should do this.</li>
 	<li>Using a website site map XML file that is submitted to Google Webmaster Tools. Google provides web developers a very useful tool for managing websites with Google, and the tool allows developers to submit a website and all its pages to Google, to inform Google what pages exist on a website. Your web developers should do this too.</li>
 	<li>By indexing other websites that have added a link back to your website, and then following that link to discover your new site.</li>
</ol>
At Amity Web Solutions we prefer method 2. All our websites will have a webmaster account created and a Sitemap XML file submitted to Google.

But even following this approach your site may not be indexed right away. It is very important to note that Google could take from a day or two to up to several weeks before it decides to act upon the submitted website and crawl and index the site in its search results.

So make sure your web developer has submitted the site to Google, and then be patient, Google will index it soon.

You can check if your site is indexed by searching for the domain name directly by entering the following in Google (substituting your domain name):
site:amitywebsolutions.co.uk
<p class="h2">Google Has Indexed It But Keywords You Are Using Do Not Show Results</p>
It may be that Google has actually indexed your site but certain keywords you are using will not show results. Searching for your site directly as above will inform you if its indexed or not. If it IS indexed, then your website may not be optimised for the keywords you are using to search for it.

Several factors exist in order to rank high for the keywords you are using to search for it:-
<ol>
 	<li>The keywords, and more importantly the phrase, you are using needs to be within the content on the website. Ideally it should be a page title, a page heading and then within the content. This may help the site rank higher for these keywords.</li>
 	<li>Having the keywords or phrase as anchor text in backlinks from other websites to your site will help Google associate your site with that phrase. e.g. linking the phrase "Web Design Caerphilly" to www.amityweb.co.uk on another website, will help Google make the connection between keywords and the website. Note: there are other factors to take into account, especially since the Google Penguin update, which is beyond the scope of this blog post, nevertheless it's still relevant!</li>
 	<li>Competition. If you have optimised your site for the keywords as in point 1 yet still are not ranking high, then competition could be a key reason for this. Competition, e.g. other websites that are optimised for the same keywords and phrase, is one of the main reasons for not ranking high, and one of the most difficult to tackle. For example, if you are  the only provider of "web design in caerphilly" then it is likely your site will rank high for this phrase one that phrase is added to the site. But if you are one of say 20 providers of web design in caerphilly, and considering Google by default shows 10 results on a page, and then consider that the other 19 companies are all trying very hard, and maybe even spending a lot of money, to search engine optimise their websites for this phrase, then it is likely your site will not rank high with little optimisation effort. You would need to invest more time and effort into search engine optimisation to compete with the others doing it.</li>
</ol>
It is very important to note that once you do make changes to the site, by adding in a keyword phrase into a page title perhaps, Google could take from a day or two to up to several weeks before it re-visits the site and indexes the changes. So you wont see results immediately!

So in summary, the first step to ranking your new site on Google is make sure Google knows about it via site map submissions, and then to make sure it ranks higher the website will need to include keyword phrases people will search for, and for a competitive market even further search engine optimisation techniques may need to be undertaken.

Hope that helps!`,
        date: '2013-07-04',
        category: 'SEO'
    },
    {
        slug: 'new-web-developer-joins-the-amity-web-solutions-team',
        title: 'New Web Developer Joins the Amity Web Solutions Team',
        excerpt: 'A new web developer has joined the team to develop and help support customer websites and apps.',
        content: `<p>We would like to welcome Kiran Kerai to the web development team at Amity Web Solutions. 2013 has been a fantastic start for us, with many new and exciting projects allowing us to expand and take on a new web developer to develop and support customer projects. Kiran's main role will be front end development of content managed websites. We wish him all the best here at Amity Web Solutions.</p>`,
        date: '2013-05-16',
        category: 'Amity News'
    },
    {
        slug: 'custom-fonts-and-their-use-on-websites',
        title: 'Custom Fonts and their use on Websites',
        excerpt: 'A quick article explaining the selection and use of fonts on websites.',
        content: `To show a specific font on a website it has to be installed on the computer. Every computer has a set of default fonts installed already (see the list here <a href="http://www.ampsoft.net/webdesign-l/WindowsMacFonts.html" target="_blank" rel="noopener noreferrer">http://www.ampsoft.net/webdesign-l/WindowsMacFonts.html</a>). So using a font that is common across all computers means it will be displayed immediately and will not need to be installed. Its why Arial, Helvetica, Verdana, Georgia, etc. are common fonts to use.

Recently it is possible to add a custom font to the website and then install it dynamically when the page loads. So we could add any font you want IF you have the file and the license to use it. When a user visits the page the font is downloaded and the website changed. We can do this from IE7 onwards and all modern browsers.

The problem with this is fonts are usually licensed. Font factories make fonts for designers and sell them. Some allow them to be used on websites, some don't, some are low cost, some are expensive! I sometimes find it very difficult to even find the license or pricing on some font factory websites (and have to contact them). So if you find a font you like from any of these (e.g. <a href="http://www.adobe.com/uk/products/type.html" target="_blank" rel="noopener noreferrer">http://www.adobe.com/uk/products/type.html</a>), then it is likely you need to buy them and make sure the license allows web use.

So what has recently emerged are font suppliers that are supplying web fonts specifically for use on websites AND free! The most common are Google Fonts <a href="http://www.google.com/webfonts" target="_blank" rel="noopener noreferrer">http://www.google.com/webfonts</a> and <a href="http://www.fontsquirrel.com/" target="_blank" rel="noopener noreferrer">http://www.fontsquirrel.com/</a>. <strong>Google Fonts</strong> allows us to reference the font stored on their server, so if someone already has visited another website that uses it, it wont be downloaded again and speed up website load times which is good. <strong>Font Squirrel</strong> we usually download from there and host it on your website.

So from a web design, development, legal and cost perspective, we recommend to choose a custom font from either Google Fonts <a href="http://www.google.com/webfonts" target="_blank" rel="noopener noreferrer">http://www.google.com/webfonts</a> or <a href="http://www.fontsquirrel.com/" target="_blank" rel="noopener noreferrer">http://www.fontsquirrel.com/</a>.`,
        date: '2012-11-09',
        category: 'Technical'
    },
    {
        slug: 'expression-engine-plugin-to-redirect-get-variables-to-expression-engine-seg',
        title: 'Expression Engine Plugin to Redirect GET Variables to Expression Engine Segment URLs',
        excerpt: 'This plugin will look at the GET URL variables and redirect the user to the segment version of the URL. For example, http://www.yourdomain.co.uk/template_group/?type=blue will redirect to http://www.yourdomain.co.uk/template_group/type/blue, or any template_group (it can be specified).',
        content: `<p>
	We&#39;ve developed another useful Expression Engine plugin.</p>
<p>
	This plugin will look at the GET URL variables and redirect the user to the segment version of the URL. For example, http://www.yourdomain.co.uk/template_group/?type=blue will redirect to http://www.yourdomain.co.uk/template_group/type/blue, or any template_group (it can be specified).</p>
<p>
	Suitable for submitting forms using the GET method for which the form variables will be appended to the URL as a GET variable, but you do not want to use PHP in the template to extract the variables.</p>
<p>
	<a href="https://github.com/amityweb/get_segment_redirect" target="_blank" rel="noopener noreferrer">Download and more information from GitHub</a></p>`,
        date: '2012-08-29',
        category: 'Technical'
    },
    {
        slug: 'bash-script-to-create-a-virtualmin-server-and-transfer-files-and-database-f',
        title: 'Bash Script to Create a Virtualmin Server and Transfer Files and Database from Another Server',
        excerpt: 'A bash script that creates a Virtualmin server then transfers files and the database from one server to the new Virtualmin server.',
        content: `<p>We needed to move many sites from one server to a Virtualmin server, so created a simple script that:-</p>
<ol>
<li>Connects to the Virtualmin server and creates the new account</li>
<li>Connects to the source server via SSH to then copy the source files and database to the destination Virtualmin server</li>
<li>Imports the database on the destination server</li>
</ol>
<p>All that is left is update config files on the destination server and it's complete. It dramatically speeds up moving websites to Virtualmin servers. It can be used without the Virtualmin part, just to copy files and databases.&nbsp;</p>
<p>This script is designed to sit on a main computer, and connect to the source and destination computers. A little tweaking and you could just put on the source or destination servers itself.&nbsp;</p>
<p>&nbsp;</p>
<pre># http://www.virtualmin.com/documentation/developer/cli

set -e

# New Site Settings #
site_domain="your-domain.co.uk"

# Source Server Details #
source_server="your-source-server.co.uk"
source_username="account-name"
source_db="account-database"

# Destination Server Details #
dest_server="your-destination-server.co.uk"
dest_username="account-name"
dest_db="account-db"
dest_pass="xxxxxxx"
dest_desc="Your Website Description"
dest_sqlpass="xxxxxxx"


#######################
# CREATE DOMAIN
#######################

ssh root@"$dest_server" "virtualmin create-domain --domain $site_domain --pass $dest_pass --desc '$dest_desc' --unix --dir --webmin --web --mail --mysql --limits-from-plan --mysql-pass '$dest_sqlpass'"

#######################
# COPY FILES
#######################

ssh root@"$source_server" "rsync -avz -e ssh --progress /home/$source_username/public_html/ root@$dest_server:/home/$dest_username/public_html/"

#######################
# DUMP DB
#######################

ssh root@"$source_server" "mysqldump $source_db &gt; /home/$source_username/$source_db.sql"

#######################
# COPY DB FILES
#######################

ssh root@"$source_server" "scp /home/$source_username/$source_db.sql root@$dest_server:/home/$dest_username/$dest_username.sql"

#######################
# RESTORE DB FILES
#######################

ssh root@"$dest_server" "mysql $dest_db &lt; /home/$dest_username/$dest_username.sql"</pre>`,
        date: '2012-08-29',
        category: 'Technical'
    },
    {
        slug: 'javascript-notification-box-using-cookies-to-remember-close',
        title: 'Javascript Notification Box Using Cookies to Remember Close',
        excerpt: 'This code will show a subtle notification box at the bottom of the website, which when closed will use cookies to remember the choice for subsequent visits. This is suitable for the EU Cookie Directive that came into force in May 2012.',
        content: `<p>Due to the <a href="/blog/eu-cookie-law-deadline-may-26th-2012">EU Cookie Directive that came into force in May 2012</a>, any site that uses cookies, and assumes consent to drop these cookies, will need a notification on the site to inform the visitor that cookies are used, linking to a page that can give more information on how to remove them.&nbsp;</p>
<p>Usually we just disable all unnecessary cookies so there is no need for this, but if you are using unnecessary cookies you will need to add a suitable notification. This method adds&nbsp;a subtle notification box at the bottom of the website, which when closed will use cookies to remember the choice for subsequent visits.</p>
<p><strong>Note</strong>: the user will require Javascript enabled for this to work. Ideally you should modify this script to show the message even with Javascript disabled</p>
<p>First, add the Javascript. We add this to our global JS file with our document.ready() call:</p>
<pre class="brush:jscript;">$(document).ready(function()
{
    /******************
    COOKIE NOTICE
    ******************/
    if(getCookie('show_cookie_message') != 'no')
    {
        $('#cookie_box').show();
    }

    $('.cookie_box_close').click(function()
    {
        $('#cookie_box').animate({opacity:0 }, "slow");
        setCookie('show_cookie_message','no');
        return false;
    });
});

function setCookie(cookie_name, value)
{
    var exdate = new Date();<br />    exdate.setDate(exdate.getDate() + (365*25));<br />    document.cookie = cookie_name + "=" + escape(value) + "; expires="+exdate.toUTCString() + "; path=/";
}

function getCookie(cookie_name)
{
    if (document.cookie.length&gt;0)
    {
        cookie_start = document.cookie.indexOf(cookie_name + "=");
        if (cookie_start != -1)
        {
            cookie_start = cookie_start + cookie_name.length+1;
            cookie_end = document.cookie.indexOf(";",cookie_start);
            if (cookie_end == -1)
            {
                cookie_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(cookie_start,cookie_end));
        }
    }
    return "";
}
</pre>
<p>Secondly add the relevant styles to your stylesheet, which styles the box and fixes it at the bottom of the page:</p>
<pre class="brush:css;">/***************************
COOKIE BOX
***************************/
#cookie_box
{ 
	position: fixed;
	display: none;
	bottom: 0px;
	font-size: 0.8em;
	z-index: 1000;
	background:#393939;
	padding:5px;
	text-align:center;
	width:99%;
	color:#ffffff;
}
	#cookie_box a:hover
	{ 
		color:#ffffff;
		text-decoration: underline
	}
</pre>
<p>Lastly, add the relevant HTML to the page to show the notification box, your message, and the close button:</p>
<pre class="brush:xml;">&lt;div id="cookie_box"&gt;Our site requires cookies to function, &lt;a href="/cookies"&gt;click here&lt;/a&gt; for more information &lt;a href="#" class="cookie_box_close"&gt;Close [X]&lt;/a&gt;&lt;/div&gt;</pre>`,
        date: '2012-08-04',
        category: 'Technical'
    },
    {
        slug: 'web-hosting-costs',
        title: 'Web Hosting Costs',
        excerpt: 'Our website website hosting types and costs',
        content: `The demands of websites vary according to their functionality and the number of visitors. Therefore we offer several types of hosting plans depending on the website and customer requirements in question.
<table class="table">
<tbody>
<tr>
<th class="col1">Server</th>
<th class="col2">Speed</th>
<th class="col3">Customers / Server</th>
<th class="col4">Suitable For*</th>
<th class="col5">Min. Cost pm**</th>
</tr>
<tr>
<td class="col1">Shared Server
(Standard Hosting)</td>
<td class="col2">Average</td>
<td class="col3">100</td>
<td class="col4">Brochure Sites
Low Traffic/Database Use
On Host Backup</td>
<td class="col5">£30</td>
</tr>
<tr>
<td class="col1">Shared Server
(Premium Hosting)</td>
<td class="col2">Fast</td>
<td class="col3">10</td>
<td class="col4">Bespoke Sites/Web Apps/eCommerce
with Low/Medium Traffic/Database Use
PCI Compliance
On and Off Host Backup</td>
<td class="col5">£60</td>
</tr>
<tr>
<td class="col1">Own Dedicated Cloud/VPS
(Premium Hosting)</td>
<td class="col2">Faster</td>
<td class="col3">1</td>
<td class="col4">Bespoke Sites/Web Apps/eCommerce
with Medium Traffic/Database Use
PCI Compliance
On and Off Host Backup</td>
<td class="col5">£195</td>
</tr>
<tr>
<td class="col1">Own Dedicated Server
(Premium Hosting Plus)</td>
<td class="col2">Fastest</td>
<td class="col3">1</td>
<td class="col4">Bespoke Sites/Web Apps/eCommerce
with High Traffic/Database Use
PCI Compliance
On and Off Host Backup</td>
<td class="col5">£395</td>
</tr>
<tr>
<td class="col1">Load Balancer***</td>
<td class="col2">NA</td>
<td class="col3">NA</td>
<td class="col4">Bespoke Sites/Web Apps/eCommerce
with High Traffic/Database Use</td>
<td class="col5">+ £cost x 1.5</td>
</tr>
</tbody>
</table>
* Every site and customer requirements are different, so this is just a guide. We are happy to discuss your website and provide a solution appropriate to your needs.
** Payable annually/bi-annually/quarterly. All prices subject to VAT.
*** A Load Balancer will ensure an increased demand for your website is distributed over another server and ensure uptime in the rare occasion the one server is not available. Not available on the Standard Shared Dedicated hosting.
<p class="h2">Services Included</p>
Or website hosting and support service is uses a high standard of reliable and fast servers from leading data centre providers, and offers the following advantages:-
<ul>
 	<li><strong>3 x Daily Backups</strong> – 1st with hosting company, 2nd with Amazon S3, 3rd to our office here</li>
 	<li><strong>Increased Security</strong> - We block access to common server ports and control panels except from approved IP addresses</li>
 	<li><strong>Fast and reliable </strong>- Our hosting providers are a very high standard service provider, we do not use budget companies like a lot of others! All hosted customers will be speed tested and optimised to make sure they are fast.</li>
 	<li><strong>Super Fast Website*</strong> - Our premium hosted customers will have additional work performed that will result in a blazingly fast website. See our <a href="/blog/simply-the-fastest-web-design-company-in-south-wales">speed comparison test</a> to get an idea of how fast it could be.</li>
 	<li><strong>Regular Server Updates</strong> - we frequently apply security, bug and general updates released by the operating system vendors, ensuring the server is always up to date. We use stable operating systems.</li>
 	<li><strong>Server monitoring</strong> - resource usage on the servers are monitored with alerts when they go over threshold, allowing us to be proactive not reactive</li>
 	<li><strong>Website monitoring</strong> - uptime monitoring of websites with alerts when they are down or slow response times. See our blog about our <a href="/blog/simply-the-fastest-web-design-company-in-south-wales">new monitoring system</a>.</li>
 	<li><strong>Scalable/Cloud VPSs</strong> so we can increase resources like RAM if need be</li>
 	<li><strong>Support</strong> - We provide excellent, friendly and fast support to our customers on all aspects of the website, content management system and email accounts</li>
 	<li><strong>Email Accounts</strong> - We can supply up to 10 email accounts as part of the shared server hosting services. Additional email accounts will require a dedicated hosting service or additional fees</li>
 	<li><strong>30 minutes of development, maintenance &amp; support time</strong> included per month</li>
 	<li><strong>Additional hosting services*</strong> can be added like load balancing</li>
</ul>
* Premium hosting only, excludes standard hosting
<p class="h2">Which One is Right For Me?</p>
It is difficult to know for sure, as it will depend on a combination of the website functionality (how many resources it uses such, as the database), the number of visitors and your own personal requirements or wants. The one rule is the better the server, the faster the site.

We recently performed some tests comparing the speeds of various servers, you can read more about it <a href="/blog/premium-web-hosting-put-to-the-test">here</a>. In summary, one of our standard <strong>shared hosting servers</strong> would provide typical speeds expected for a brochure website due to using shared resources, our <strong>vps or cloud servers</strong> would be mid-range and faster than our shared server, but the fastest would be a <strong>dedicated server</strong>.

If you have an eCommerce site then PCI compliance should be important to you, and therefore we recommend a cloud or dedicated hosting solution. You can read more about <a href="/blog/website-legal-requirements-6-pci-dss">PCI Compliance here</a>.`,
        date: '2012-07-16',
        category: 'Hosting'
    },
    {
        slug: 'premium-web-hosting-put-to-the-test',
        title: 'Premium Web Hosting Put to the Test',
        excerpt: 'We decided to review our hosting plans and the hosting servers on offer and put various suppliers and servers to the test to see which is best for our Premium Hosting service.',
        content: `We needed to invest in a new server for our website hosting service but before we placed the order we decided to review our usual server setup (several dedicated and VPS's) and hosting plans. With our premium website service being so popular we decided it is wise to ensure we offer a premium website hosting service to go with it. After all, it makes sense to ensure the server can deliver a fast website after spending time ensuring the website itself is optimised for page load speed.

Our most recent server is a dedicated server and although has plenty of space left, it does have a lot of websites so is classed as a shared dedicated server. As with any shared environment, all these websites would have an impact on each other. Although they still load fast enough to satisfy our customers, they would not load as fast as they could do if they were the only site, or one of a few sites, on a dedicated server or VPS.

We therefore wondered if instead of having a dedicated server that many of our customers shared, to have several smaller servers that few of our customers share. With this in mind we thought it about time we offer Cloud Hosting. Cloud Hosting can be compared to VPS's in terms of resources offered (perhaps 1 or 2Gb RAM, 20 or 40Gb space), except they use a distributed architecture to store files and resources on offer, which means they are more reliable (less inclined to suffer from hardware failures) and easily scalable (adjust resources like RAM and space required) to suit the load.

Our predicament was which host to use. We wanted to find the fastest cloud server we could to ensure the premium website hosting service will serve our customers websites as fast as possible. On the other hand, the faster the server, the higher the cost. So we do need to weigh up cost with performance.

With that in mind we ran various tests on various servers from various providers. We wanted to compare speeds between a dedicated server with one website, our most recent dedicated server with over 50 websites, a dedicated VPS, and a few dedicated cloud servers. We chose <strong>EUKHost</strong>, <strong>Rackspace</strong> and <strong>Linode</strong> as the hosting providers to test.

The results are quite interesting and mean we can now choose a suitable provider for the next phase in our premium website services.

<img class="alignnone size-full wp-image-722" src="https://www.amityweb.co.uk/wp-content/uploads/2012/07/07-2012-server-graphs.jpg" alt="" width="917" height="311" />

The above chart is a small snapshot of the tests which we ran over a period of a few days. Over those days the chart altered a little, but the what you see is representative of the average performance of each server, especially in relation to one an another.
<p class="h2">Results - Top Down</p>
First up is <strong>EUKHost</strong> (<a href="https://www.eukhost.com/" target="_blank" rel="noopener">https://www.eukhost.com/</a>), a current server provider of ours. The results showed that this cloud server did not perform as well as we thought it would. Worse than our shared dedicated that has a lot of websites, yet of the same specification. A dedicated will always be the most powerful, but with so many sites on it we thought a brand new cloud would be able to out perform it. But no.

Next up it's an approximate tie between a dedicated VPS from EUKHost and our EUKhost shared dedicated server with many websites. The VPS in this case actually has twice the RAM than our dedicated shared server. Again, we are surprised at the low performance of this VPS. We think it should be far faster than the shared dedicated.

Slightly faster than the VPS and shared dedicated are the cloud servers from <strong>Rackspace</strong> (<a href="http://www.rackspace.co.uk/" target="_blank" rel="noopener noreferrer">http://www.rackspace.co.uk/</a>) and <strong>Linode</strong> (<a href="http://www.linode.com/" target="_blank" rel="noopener noreferrer">http://www.linode.com/</a>), both reputable and good quality server providers. The fact these are 1Gb RAM and the EUKHost VPS a 2Gb shows the performance benefit of using these cloud servers. We are still surprised the cloud servers do not perform much better than the shared dedicated.

Our surprise about the great performance of the shared dedicated (not we do not consider it a low performance of the VPS and cloud servers) is justified after reviewing the last server on test, a dedicated server with only one average usage website on it. You can see from the results this server far out performance all the others. This confirms that dedicated servers truly are far better than, and out perform, VPS and cloud servers.

Of course, with performance comes price. Our non-shared dedicated server costs 4x the price of the cloud servers so the best website speed will come at a costly price for customers.
<p class="h2">Conclusion</p>
Based on our tests, we can now decide on the next server(s) to order for our customers websites. In fact, we have decided to offer several choices to customers due to the varying speed and cost of each option, and the varying usage of websites. We will offer our standard, shared hosting service as we have done because the tests show performance is fine, but add on additional premium web hosting services for those who need something faster, have high traffic or use a lot of server resources.
<ul>
 	<li><strong><strong>Shared </strong>Dedicated Hosting</strong>: Many websites (50 to 100) sharing a dedicated server. This is our current standard service.</li>
 	<li><strong>Shared Cloud Hosting</strong>: Several websites (5 to 10) hosted on a cloud server. The low number of sites will ensure performance is maintained</li>
 	<li><strong>Dedicated Cloud Hosting</strong>: One website on a cloud server, to ensure the website benefits from all server resources</li>
 	<li><strong>Dedicated Server</strong>: One website hosted on a dedicated server to ensure the website performs as best it can</li>
</ul>
We can of course vary the above offerings, as no website is different. From static websites with low visitors, to dynamic websites with medium traffic, to extremely popular and database hungry applications, all hosting requirements are covered from our service.

Thanks to <strong>Nodeping</strong> (<a href="http://nodeping.com/" target="_blank" rel="noopener noreferrer">http://nodeping.com/</a>) and <strong>Singlow</strong> (<a href="https://github.com/singlow/smoothieping" target="_blank" rel="noopener noreferrer">https://github.com/singlow/smoothieping</a>) for the monitoring and graphs.`,
        date: '2012-07-08',
        category: 'Hosting'
    },
    {
        slug: 'our-website-audit-and-report-service',
        title: 'Our Website Audit and Report Service',
        excerpt: 'As part of our premium website service we have a detailed 60+ website checklist to conform to that ensures our websites are just that... premium. It ensures our websites are of the highest standard and therefore perform as best as they can for our customers.',
        content: `<p>As part of our premium website service we have a detailed 60+ website checklist to conform to that ensures our websites are just that... premium. It ensures our websites are of the highest standard and therefore perform as best as they can for our customers.</p>
<p>We can now offer the website audit and detailed report to feedback positive and negative aspects of any website in order to highlight areas that need improvement.</p>
<p>If you would like to obtain a sample report or order one of the audit services below, please <a href="/contact-us">contact us</a>.&nbsp;</p>
<p class="h2">Basic Report (&pound;70 + vat)</p>
<ul>
<li>Layout and Design (user friendly, print friendly, optimised for most common browsers, and more)</li>
<li>Content (relevant and legal content, 404, sitemap, easy navigation, broken links, spell checked, and more)</li>
<li>User experience (navigation easy to use, colours, search facility, and more)</li>
<li>Social Networking (social networking integration and support)</li>
</ul>
<p class="h2">Standard Report (&pound;140 + vat)</p>
<ul>
<li>All points in Basic Report</li>
<li>Search Engine Optimisation (META Tags, friendly/keyword URLs, Google Analytics, and more)</li>
<li>Website Speed (Google page speed test, optimised images check, optimised code, and more)</li>
</ul>
<p class="h2">Advanced Report (&pound;210 + vat)</p>
<ul>
<li>All points in Basic Report</li>
<li>All Points in Standard Report</li>
<li>Accessibility &amp; Standards (W3C compliance, and more)</li>
<li>Compatibility (cross browser and device support)</li>
<li>Security and Privacy (Admin URL check, latest CMS check, server check, and more)</li>
</ul>`,
        date: '2012-06-27',
        category: 'Design/Development'
    },
    {
        slug: 'interspire-email-marketer-subscription-plugin-for-expression-engine',
        title: 'Interspire Email Marketer Subscription Plugin for Expression Engine',
        excerpt: 'We have released a plugin for Expression Engine that allows a user to easily be subscribed to an Interspire Email Marketer contact list from an Expression Engine template. Perfect for a newsletter subscription form or a contact form thank you page if a user has opted in to receive newsletters.',
        content: `We have released a plugin for Expression Engine that allows a user to easily be subscribed to an Interspire Email Marketer contact list from an Expression Engine template. Perfect for a newsletter subscription form or a contact form thank you page if a user has opted in to receive newsletters.

You can download the plugin from <a href="https://github.com/amityweb/iem_subscriber" target="_blank" rel="noopener noreferrer">GitHub</a>.`,
        date: '2012-06-25',
        category: 'Technical'
    },
    {
        slug: 'center-aligning-a-child-menu-drop-down-with-jquery',
        title: 'Center Aligning a Child Menu Drop Down with JQuery',
        excerpt: 'It\'s tricky center aligning a drop down menu using CSS only, so we use a simple JQuery method to calculate the parent width and work out the child menu widths, and set them accordingly. If a user does not have Javascript enabled, then the menu still works, but is left aligned to the parent menu instead.',
        content: `It's tricky center aligning a drop down menu using CSS only, so we use a simple JQuery method to calculate the parent width and work out the child menu widths, and set them accordingly.

<img class="alignnone size-full wp-image-726" src="https://www.amityweb.co.uk/wp-content/uploads/2012/06/2012-17-06-center-align-menu.png" alt="" width="143" height="171" />

If a user does not have Javascript enabled, then the menu still works, but is left aligned to the parent menu instead.
<pre class="brush:jscript;">$("#header-menu ul li").each( function()
{
    if( $(this).find("ul").length &gt; 0 )
    {
        var parent_width = $(this).outerWidth( true );
        var child_width = $(this).find("ul").outerWidth( true );
        var new_width = parseInt((child_width - parent_width)/2);
        $(this).find("ul").css('margin-left', -new_width+"px");
    }
});</pre>`,
        date: '2012-06-17',
        category: 'Technical'
    },
    {
        slug: 'our-custom-addthis-code-to-use-bitly-custom-title-and-disable-cookies',
        title: 'Our Custom AddThis Code to use Bitly, Custom Title and Disable Cookies',
        excerpt: 'There are many options and configurations the AddThis code could have for your setup. This is ours.',
        content: `<p>
	There are many options and configurations the AddThis code could have for your setup. We needed the following settings:</p>
<ul>
	<li>
		Twitter username, to offer the option to people to follow AmityWeb when they Tweet our pages</li>
	<li>
		Bitly to shorten any URLs, when using Twitter</li>
	<li>
		Disable AddThis cookies for the EU Cookie Law</li>
	<li>
		Custom Title setup for Twitter (page Title, then the URL link)</li>
</ul>
<p>
	Here&#39;s our code...</p>
<pre class="brush:jscript;">
&lt;div class="addthis_toolbox addthis_default_style"&gt;&#10;    &lt;a class="addthis_button_facebook_like" fb:like:layout="button_count"&gt;&lt;/a&gt;&#10;    &lt;a class="addthis_button_tweet" tw_via="TWITTER_USERNAME"&gt;&lt;/a&gt;&#10;    &lt;a class="addthis_button_google_plusone" g:plusone:size="medium"&gt;&lt;/a&gt;&#10;    &lt;a class="addthis_counter addthis_pill_style"&gt;&lt;/a&gt;&#10;&lt;/div&gt;&#10;&lt;script type="text/javascript"&gt;&#10;    var addthis_config = &#123;data_use_cookies:false&#125;&#10;    var addthis_share = &#123;&#10;        url_transforms: &#123;&#10;             shorten: &#123;&#10;                 twitter: &#39;bitly&#39;&#10;             &#125;,&#10;         &#125;,&#10;         shorteners: &#123;&#10;             bitly: &#123;&#10;                  login: &#39;BITLY_USERNAME&#39;,&#10;                  apiKey: &#39;BITLY_KEY&#39;&#10;             &#125;&#10;         &#125;,&#10;         templates : &#123;&#10;         twitter : "&#123;&#123;title&#125;&#125; &#123;&#123;url&#125;&#125;"&#10;    &#125;&#10;&#125;&#10;&lt;/script&gt;&#10;&lt;script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=ADD_THIS_USERNAME"&gt;&lt;/script&gt;</pre>
<p>
	If you want a custom image to show on the post (e.g. on the Facebook page) then you should put this in the HEAD section of the page:</p>
<pre class="brush:xml;">
&lt;link rel="image_src" href="path-to-image.jpg" /&gt;</pre>`,
        date: '2012-06-14',
        category: 'Technical'
    },
    {
        slug: 'secure-your-website-passwords-using-a-password-manager',
        title: 'Secure Your Website Passwords Using a Password Manager',
        excerpt: 'In light of the recent LinkedIn password breach we thought we\'d let you know about password managers, a system and process we use to store all our hard to remember and secure passwords in one place, encrypted, and accessing them with one secure password. We believe this to be more secure than using a few easy to remember and not so secure passwords.',
        content: `Use LinkedIn? Your password may have been obtained. Not so bad if you only use this password on LinkedIn and have since changed it, but we hazard a guess you use this password on other websites too. Maybe the same email as the username? Maybe the same password to get into the email which is used to reset passwords on other systems! We understand why this may be… we can’t all remember hundreds of passwords made from randomly generated numbers and characters. So we create a few passwords we do remember, then re-use them.

Therefor we recommend a process that will change the way you use and remember passwords forever. Use a password management system! A what?? A system (whether software or a website) to store your passwords and you can access them all with 1 master password. This sounds risky… what if the master password was hacked? Well, we think it more secure than having a few memorable passwords. Password management system developers are always striving to ensure their systems are as highly secure as possible. Your password data will be encrypted (and decrypted using your master password). No one can get your data without your master password. So you only need to remember ONE hard to guess, master password.

Some popular password management systems are <a title="Link to OnePassword" href="https://agilebits.com/onepassword" target="_blank" rel="noopener noreferrer">1Password</a>, <a title="Link to LastPass" href="https://www.lastpass.com/" target="_blank" rel="noopener noreferrer">LastPass</a>, <a href="http://www.roboform.com/" target="_blank" rel="noopener noreferrer">RoboForm</a> and <a title="Link to eWallet" href="http://www.iliumsoft.com/ewallet" target="_blank" rel="noopener noreferrer">eWallet</a>. We particularly like 1Password. Your passwords are not stored online, but stored in an encrypted file on your computer. You can sync. between computers and mobile devices and tablets using Dropbox if you like. You need your Dropbox to use a secure password though, but the file will be encrypted even if anyone did get it.

It not only makes life a lot easier using a password manager, but in our opinion is more secure due to you having to remember only one secure password, and using very secure and hard to guess passwords on all your online accounts.`,
        date: '2012-06-08',
        category: 'Advice'
    },
    {
        slug: 'eu-cookie-law-deadline-may-26th-2012',
        title: 'EU Cookie Law Deadline, May 26th 2012',
        excerpt: '​The EU Cookie Law deadline of May 26th is approaching by which time all websites need to confirm to the EU Cookie Law directive. Find out what a cookie is, and what you need to do to conform to the new law.',
        content: `<b>Update</b><strong>: May 26th 2012: </strong>The ICO changed the requirements at the very last minute stating it is OK to assume consent for cookies, but a clear link to instructions on how to remove or block cookies needs to be shown. This means you no longer have to block cookies and ask to allow them (which is great news!), but you do have to make it clear you use cookies and inform the user how to remove or block them. We recommend using an unintrusive pop up at the bottom of the website not to lower the user experience of the website.
<p class="h2">The Directive</p>
The EU Cookie Law deadline of May 26th is approaching by which time all websites need to confirm to the EU Cookie Law directive.
<p class="h2">What are cookies?</p>
A cookie is a small file stored on a users computer by the browser when they visit a website that leaves cookies. The browser can read a users cookies and send information back to websites that a user visits. Cookies are primarily a mechanism for websites to remember things that a browser had done there in the past, which can include having clicked particular buttons, logging in, or having read pages on that site months or years ago. Cookies can also be used to track users browsing patterns, such as those left by <a title="Link to Google Analytics" href="http://www.google.com/analytics/" target="_blank" rel="noopener noreferrer">Google Analytics</a> that all our customer websites have.

You can read more information here <a title="Link to Wikipedia Article on Cookies" href="http://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/HTTP_cookie</a>
<p class="h2">So what’s the issue with cookies?</p>
It’s possible that cookies can be used on commercial websites to target advertising at users based on browser and internet patterns and history. It is possible this has privacy implications and so the Information Commissioners Office (ICO <a title="Link to ICO" href="https://ico.org.uk/" target="_blank" rel="noopener">https://ico.org.uk/</a>) has created a policy to prevent this happening.
<p class="h2">What does the policy require?</p>
Although cookies can be turned off by a user on a per browser basis, due to said privacy concerns, the ICO has decided a user must <strong>opt in</strong> to receive cookies rather than opt out. The EU cookie law which comes into force on May 26th 2012, requires websites to <strong>gain consent</strong> from visitors to store or receive any information on a computer or any other web connected devices (e.g. smartphone or tablet). The cookie law has been designed to protect online privacy of customers by making them aware, and giving them a choice, about the amount of information collected by websites. After May 26th 2012 if a business is not compliant, or is not visibly working towards compliance, it will run the risk of enforcement action and a possible fine of up to £500,000.
<p class="h2">What are the implications?</p>
In order to comply, when a user visits your website they should be presented with an option to accept cookies before any cookies are left on their machine. The cookies need to be explained in a clear Privacy Policy. Google Analytics requires cookies so this will stop collecting data until a user accepts the cookies. Any cookie required for the website to function (i.e. shopping basket, login forms) are exempt and are OK to be created.
<p class="h2">What do I need to do?</p>
Most content management systems, including the systems we provide to our customers, leave cookies on a users machine. In theory, <strong>these cookies need to be prevented from being created until a user agrees to accept cookies</strong>.

Your web developer will need to make some changes to your website code to prevent the cookies being created and, if you need cookies, add in an option for the user to accept cookies (an unobtrusive pop up box is common). If this is not implemented, then you need to be able to show you are actively working toward implementing it.

In addition to this a clear Privacy Policy needs top be created to explain what data and cookies the website collects, and what the website owner does with the data.
<p class="h2">What has Amity implemented?</p>
We have disabled all cookies our website except Google Analytics. We believe Google Analytics to be an essential service for the operation and function of our website and therefore exempt (note this is our opinion and not those of the ICO). <strong>Why?</strong> Because we use Google Analytics to ensure our website is performing well, functioning properly, and stays competitive. It allows us to continuously improve these aspects which in turn allow us to provide our products and services to a level customers expect.

We have also implemented a <a title="Link to Privacy Policy" href="/privacy-policy">Privacy Policy</a> that clearly defines our use of cookies and other data we collect.

If you need any help implementing these actions please <a title="Link to Contact Us" href="/contact-us" target="_blank" rel="noopener noreferrer">contact us</a> for more information.`,
        date: '2012-05-15',
        category: 'Website Policy'
    },
    {
        slug: 'how-much-does-a-website-cost',
        title: 'How much does a website cost?',
        excerpt: 'Every customer\'s business and therefore their website requirements are different. Some customers want a simple 5 page brochure website with minimal, simple design, yet others have hundreds of pages, member registrations and logins, forums, social interaction, blogs and a lot more.',
        content: `<p>Every customer's business and therefore their website requirements are different. Some customers want a simple 5 page brochure website with minimal, simple design, yet others have hundreds of pages, member registrations and logins, forums, social interaction, blogs and a lot more. The different requirements are infinite which is why we recommend customer meetings to discuss requirements so we can quote for that purpose.&nbsp;Nevertheless, we can explain various costs associated with website design and development and what to expect for each one. All our websites include a content manager.</p>
<p class="h2">&pound;1,000+ Entry Level Websites</p>
<p>For this investment customers can expect an entry level website using a website template for the design tailored for the business branding and services. A content manager can be included but it is unlikely any of the recommended premium services such as search engine optimisation would be included. This service should only be suitable for customers with a low budget looking to have an online presence with the aim of investing in improving the website in the near future.</p>
<p class="h2">&pound;3,000+ Premium Website Service</p>
<p>At this investment we can now begin to offer our premium website service. This is the minimum investment we recommend to ensure your website is designed and developed to the high standard required for return on investment. Our graphic designer, working close to the customer, will design a custom design suited for the business objectives and user experience, and the site built with search engine optimisation, page load speed, browser and device compatibility, standards and accessibility in mind and a lot more. Our 60+ point website checklist ensures the website is of a high standard.</p>
<p>At this point it is also worth considering mobile and tablet versions of the website.&nbsp;</p>
<p class="h2">&pound;5,000+ Premium Website with Custom Functionality/Web Applications</p>
<p>At this level we are able to build upon the premium website service and add custom functionality and applications to the website. Perhaps the website requires a database administration and front end search, or member registration and login with social interaction, or integrate with 3rd party systems, or have a large amount of information to publish and organise. The requirements are endless.</p>
<p class="h2">&pound;10,000+ Large Scale Custom Website/Web Applications</p>
<p>This investment would suit customers requiring much more functional and complex web applications to suite their specific business requirements. Whether it be a bespoke database and reporting systems, a custom social network, a company intranet system, a large eCommerce project. Contact us if you would like to see some examples of our work.</p>
<p class="h2">&pound;TBC</p>
<p>Of course, your project, being specific to you, may not fit in any of the above ranges. Perhaps you want the Entry Level Website with a Member Registration and Login area. Perhaps you need the Premium Service with Mobile Website versions. Or the whole shebang of a Premium Website with eCommerce Shopping Carts, Database Systems and Mobile Website and Apps thrown in. In these situations we should get together and discuss your project so we can provide a quote specific to you.</p>
<p>So whatever you need feel free to contact us and we will be happy to help.</p>
<p>For <a href="/blog/web-hosting-costs">website hosting costs</a> please <a href="/blog/web-hosting-costs">click here</a>.&nbsp;</p>`,
        date: '2012-03-11',
        category: 'Design/Development'
    },
    {
        slug: 'our-premium-website-service-explained',
        title: 'Our premium website service explained',
        excerpt: 'Our passion is to build websites of the highest quality for our customer. To achieve this we have developed a 60+ point checklist we use to ensure all our premium websites confirm to what we consider necessary requirements for a high quality website.',
        content: `Our passion is to build websites of the highest quality for our customer. We live and breathe web design and development, keeping up with latest news and technology and how it can and should be applied to web development to ensure our websites are not only up to date and modern, but of the highest quality.

To achieve this we have developed a 60+ point checklist we use to ensure all our premium websites confirm to what we consider necessary requirements for a high quality website.

The main areas we focus on as part of our <strong>premium website service</strong> are:-
<ol>
 	<li><strong>Hand Coded</strong>: We build all our premium websites by hand, allowing more control over the code ensuring we know exactly how it works, it only contains what is necessary to work, no unnecessary code wasting resources, and easily maintained and modified.</li>
 	<li><strong>Page Speed Optimised</strong>: we can ensure the code is optimised to download and run as fast as possible, an important factor in website rankings with Google</li>
 	<li><strong>Bespoke Website Design</strong>: to ensure User Experience and the business objectives are incorporated into the design</li>
 	<li><strong>Search engine optimised</strong>: We know a lot about the requirements of search engine optimisations from a coding perspective, and build the sites with this in mind</li>
 	<li><strong>Standards Compliant</strong>: We can ensure the code confirms to standards and accessibility guidelines, not only a legal requirement, but very important for users with disabilities to use our websites effectively</li>
 	<li><strong>Browser and Device compatible</strong>: we can ensure the websites work across multiple devices, especially important with so many visitors using mobile devices to access websites.</li>
 	<li><strong>Progression and Maintenance</strong>: We can change and adapt our code easily to new technology, devices, browsers and further customer requirements because we know the code</li>
 	<li><strong>A lot more</strong>: Our detailed Website Checklist has over 60+ points we consider necessary for a website to be high quality, and we ensure the website conforms to all of them.</li>
</ol>`,
        date: '2012-03-11',
        category: 'Design/Development'
    },
    {
        slug: 'is-your-website-legal',
        title: 'Is Your Website Legal?',
        excerpt: 'Did you know your website must adhere to some legal requirements? I have written a series of blogs on 7 important legal requirements your website and E-Commerce site must adehere to.',
        content: `Did you know your website must adhere to some legal requirements? I have written a series of blogs on 7 important legal requirements your website and E-Commerce site must adhere to.
<ol>
 	<li><a href="/blog/website-legal-requirements-1-company-information">Company Information</a></li>
 	<li><a href="/blog/website-legal-requirements-2-web-accessibility-and-the-disability-discrimin">Web Accessibility and the Disability Discrimination Act</a></li>
 	<li><a href="/blog/website-legal-requirements-3-the-data-protection-act">The Data Protection Act</a></li>
 	<li><a href="/blog/website-legal-requirements-4-consumer-protection-distance-selling-regulatio">Consumer Protection (Distance Selling) Regulations</a></li>
 	<li><a href="/blog/website-legal-requirements-5-electronic-commerce-regulations-ec-directive">Electronic Commerce Regulations (EC Directive)</a></li>
 	<li><a href="/blog/website-legal-requirements-6-pci-dss">PCI DSS</a></li>
 	<li><a href="/blog/website-legal-requirements-7-the-eu-anti-spam-laws">The EU Anti Spam Laws</a></li>
 	<li><a href="/blog/eu-cookie-law-deadline-may-26th-2012">The EU Cookie Directive</a></li>
</ol>
Here is a summary of the 8 important requirements.
<p class="h2">So What Does My Website Need to Conform?</p>
To ensure your website is legal you must:

<em>All Websites</em>
<ul>
 	<li>For a registered business, the website needs to display the following <a href="/blog/website-legal-requirements-1-company-information"><strong>Company Information</strong></a> the Business Name, place of registration, registered number, its registered office address and if it is being wound up.</li>
 	<li>Adhere to <strong>Priority 1</strong> of the <a href="/blog/website-legal-requirements-2-web-accessibility-and-the-disability-discrimin"><strong>Web Accessibility Guidelines</strong></a> set out at <a href="http://www.w3c.org/" target="_blank" rel="noopener noreferrer">W3C</a></li>
 	<li>If the website collects user data (i.e. via simple enquiry form, or shopping cart), display a <em><strong>Privacy Policy </strong></em>informing the user what the business does with the data and that it conforms to the <strong><a href="/blog/website-legal-requirements-3-the-data-protection-act">The Data Protection Act</a>.</strong> The Privacy Policy needs to explain what cookies the website will create and what they are for.</li>
 	<li>Require user <a title="EU Cookie Directive" href="/blog/eu-cookie-law-deadline-may-26th-2012"><strong>consent to leave cookies on the visitors machine</strong></a>, unless the cookie is a necessary requirement for the website to function</li>
</ul>
<em>E-commerce Sites</em>
<ul>
 	<li>Have <em><strong>Terms &amp; Conditions, </strong><strong>Delivery and </strong><strong>Returns Policy</strong></em> pages to display information as part of the <a href="/blog/website-legal-requirements-4-consumer-protection-distance-selling-regulatio"><strong>Consumer Protection (Distance Selling) Regulations</strong></a> and <a href="/blog/website-legal-requirements-5-electronic-commerce-regulations-ec-directive"><strong>Electronic Commerce Regulations (EC Directive)</strong></a></li>
 	<li>If you collect and process credit and debit card information, you must conform to the <a href="/blog/website-legal-requirements-6-pci-dss"><strong>PCI DSS</strong></a>.</li>
 	<li>To conform to <a href="/blog/website-legal-requirements-7-the-eu-anti-spam-laws"><strong>EU Anti Spam Laws</strong></a>, ensure your email database is of opt-in email addresses, and include an opt-out instruction on all marketing emails sent</li>
</ul>`,
        date: '2012-03-11',
        category: 'Website Policy'
    },
    {
        slug: 'make-sure-your-website-works-for-everyone',
        title: 'Make sure your website works for everyone',
        excerpt: 'With so many different computers, mobile devices and browsers being used to access websites it\'s clear that websites need to be designed for a lot more than just Internet Explorer these days. We have to consider the different versions of Internet Explorer (7, 8, 9 and soon 10), Firefox, Google Chrome, Safari and Opera, how these look on a Windows, Mac OSX and Linux computers, and then on different devices such as the iPad, iPhone, Android Phones and Tablets, and Blackberry Smartphones.',
        content: `<p>With so many different computers, mobile devices and browsers being used to access websites it's clear that websites need to be designed for a lot more than just Internet Explorer these days. We have to consider the different versions of Internet Explorer (7, 8, 9 and soon 10), Firefox, Google Chrome, Safari and Opera, how these look on a Windows, Mac OSX and Linux computers, and then on different devices such as the iPad, iPhone, Android Phones and Tablets, and Blackberry Smartphones.</p>
<p>Of course, ensuring websites comply to standards help, but not all browsers conform to standards so we do need to test and adapt websites to work across all these browsers and devices.</p>
<p>Our premium website service has a 60+ point checklist we go through to ensure it is of the highest quality and includes checking and optimising websites for various browsers and devices, ensuring it not only looks good, but works, for every visitor to the websites we build.</p>`,
        date: '2012-03-11',
        category: 'Design/Development'
    },
    {
        slug: 'is-your-website-fast-enough',
        title: 'Is your website fast enough?',
        excerpt: 'Page Speed Optimisation is factor Google takes in to account for website rankings. There are various aspects of a website Google will look at to see if it has been optimised, such as whether images have been optimised and coding is compressed to download quicker.',
        content: `<p>There are two factors relating to website page speed&hellip;</p>
<p class="h2">1) Page Speed Optimisation</p>
<p>Page Speed Optimisation is factor Google takes in to account for website rankings. There are various aspects of a website Google will look at to see if it has been optimised, such as whether images have been optimised and coding is compressed to download quicker.</p>
<p>It's been a while since Google introduced this check yet so many websites, even by leading web design companies, have not implemented many of Google suggestions to optimise the website for page speed.</p>
<p>We are very proud to say that all our premium websites are optimised for Google Page Speed. Page speed optimisation is part of our 60+ points website checklist for premium websites. We spend time optimising the code to ensure it passes Googles test with flying colours. We recommend websites should have above 90/100 Google Page Speed Score. On average we can achieve 93/100 to 95/100 which is far higher than many of our competitors page speed score.</p>
<p class="h2">2) Website page load time.</p>
<p>The physical time it takes to load a web page and is crucial to retain visitors. Just a few seconds or more could result in the visitor leaving and going elsewhere.</p>
<p>The webpage load time is separate to Google's Page Speed Optimisation. A webpage could have a very good Google Page Speed Optimisation but still take time to load, perhaps due to the number of images on the page.</p>
<p>As part of our premium service we also try to achieve a lower than 1 second home page load time.</p>`,
        date: '2012-03-11',
        category: 'SEO'
    },
    {
        slug: 'custom-website-design-for-improved-user-experience',
        title: 'Custom website design for improved user experience',
        excerpt: 'All our premium websites our graphic designer works closely with the client to gain a detailed understanding of the business and the goals of the website, design the website to support those goals and introduce an optimised user experience to ensure the website is effective as possible.',
        content: `With so many low cost, template driven websites being developed, user experience and the website and business objectives are unlikely to be considered due to taking an off the shelf product not designed for that specific purpose.

It is crucial in any website project to design the site with the business objectives in mind and ensuring an optimised user experience.

Therefore for all our premium websites our graphic designer works closely with the client to gain a detailed understanding of the business and the goals of the website, design the website to support those goals and introduce an optimised user experience to ensure the website is effective as possible.`,
        date: '2012-03-11',
        category: 'Design/Development'
    },
    {
        slug: 'hand-made-websites-are-better-quality',
        title: 'Hand made websites are better quality',
        excerpt: 'With years of experience we know a thing or two (a lot more actually :) ) about web development and hand building our websites ensures they are of the highest quality build, conform to all standards and accessibility guidelines, are built with search engine optimisation in mind and load fast. In fact there is a lot more that goes on behind the scenes when hand building to ensure our customers websites are of the highest quality.',
        content: `<p>It's well known that the web design industry is crowded. A simple search of <strong>web design cardiff</strong> for example reveals many pages of web design companies, most I have never heard of. Some may argue it being a difficult industry to operate in being so saturated. But on closer inspection it becomes clear most of the companies provide template based websites. That is, a website built using a free or low cost design built by someone else. For customers on a very low budget (&lt; &pound;1000) a template website is a suitable solution to get online. They look good and are low cost. Unfortunately that's where the benefits end. By the very nature of being low cost, the quality of templates are usually quite bad due to not complying to standards or accessibility guidelines (a legal requirement), have no thought for SEO and are over bloated with unnecessary code.&nbsp;</p>
<p>That's why we <strong>hand build</strong> all our websites at Amity Web Solutions. With years of experience we know a thing or two (a lot more actually :) ) about web development and hand building our websites ensures they are of the highest quality build, conform to all standards and accessibility guidelines, are built with search engine optimisation in mind and load fast. In fact there is a lot more that goes on behind the scenes when hand building to ensure our customers websites are of the highest quality.</p>
<p>Here are a few important reasons to hand build:</p>
<ol>
<li><strong>More control over the code</strong>: All the code is developed by us ensuring we know exactly how it works, it only contains what is necessary to work, no unnecessary code wasting resources, and easily maintained and modified.</li>
<li><strong>Page speed optimised</strong>: we can ensure the code is optimised to download and run as fast as possible, an important factor in website rankings with Google</li>
<li><strong>User experience and Business Focused</strong>: the website design is created with the business and it's web visitors in mind, not like a template design</li>
<li><strong>Search engine optimised</strong>: We know a lot about the requirements of search engine optimisations from a coding perspective, and build the sites with this in mind</li>
<li><strong>Standards compliant</strong>: We can ensure the code confirms to standards and accessibility guidelines, not only a legal requirement, but very important for users with disabilities to use our websites effectively</li>
<li><strong>Browser and device compatible</strong>: we can ensure the websites work across multiple devices, especially important with so many visitors using mobile devices to access websites.</li>
<li><strong>Progression and Maintenance</strong>: We can change and adapt our code easily to new technology, devices, browsers and further customer requirements because we know the code</li>
</ol>
<p>Hand built websites result is a far superior quality website compared to using low cost or free templates. This is what sets us apart from the majority of web design companies in South Wales and why our customers choose us to design and develop their website.</p>`,
        date: '2012-03-11',
        category: 'Design/Development'
    },
    {
        slug: 'meta-tags-for-expression-engine-template-index-pages',
        title: 'META Tags for Expression Engine Template/Index Pages',
        excerpt: 'Our custom META tag coding for SEO LITE, the META tag manager for Expression Engine',
        content: `I am quite new to Expression Engine, and although its quite flexible it does have it’s shortcomings.

One of the main issues I can see with it is its inability to manage META information. The in-built way would be to create a Channel Field for each Channel so when you publish data you can add in the META information and then display in in the template or header file. BUT if you have many channels, you need different names for each of these and it becomes a lot of fields to manage in conditional statements in the template. You cannot add fields to the main template index file either (e.g. a blog list).

I guess the above reasons is why so many forums online show data being embedded in the template files themselves. Well, although EE may be a great system, this is a massive NO NO for content managed websites. All information like this must be accessible in the CMS by the website owners who are likely not to have HTML experience.

So I installed SEO Lite (<a href="https://devot-ee.com/add-ons/seolite" target="_blank" rel="noopener noreferrer">https://devot-ee.com/add-ons/seolite</a>).

This works very well on a per page basis (.e.g. an about us, or actual blog page). Because it adds the META fields to the entry for the page.

But this too will not allow an individual template index page to be managed. It seems these template index pages in EE are quite hard to add your own data to.
So I have combined Global Variables with SEO Lite and now have the perfect CMS managed META data.

The following code first checks is a page exists, e.g. blog/blog_post and take META info from there or use the default. If we are not on an individual page, but a template/index file which we don’t have data for (e.g. blog listing).

The second IF statement takes the segment name from the URL and prepends it to some text such as ‘_meta_title’. What this produces is a call to a global variable based on the segment name, e.g. ‘blog_meta_title’. All you need to do is then create the Global Variables based on the segment name.

The last IF statement is for the home page, and will get the META info you add in the Home page.
<pre class="brush:php;">{if segment_2 != ''}
{exp:seo_lite use_last_segment="yes" friendly_segments="y" default_title='' default_keywords='' default_description='' }
{/if}
{if segment_1 != '' &amp;&amp;  segment_2 == ''}
{exp:seo_lite use_last_segment="yes" friendly_segments="y" default_title='' default_keywords='' default_description='' }
{/if}
{if segment_1 == '' &amp;&amp;  segment_2 == ''}
{exp:seo_lite url_title='home' default_keywords='' default_description='' }
{/if}</pre>
Further work I would like to do is if the global variables do not exist, then to show the default SEO Lite content.`,
        date: '2012-02-01',
        category: 'Technical'
    },
    {
        slug: 'new-web-developer-joins-the-team',
        title: 'New Web Developer Joins the Team',
        excerpt: 'Due to our continued success and growth this year, we have taken on a new Web Developer to work on web site development projects.',
        content: `Due to our continued success and growth this year, we have taken on a new Web Developer to work on web site development projects. <b><span class="il">Jamie</span> <span class="il">Blacker</span></b> who started with us on Monday 28th November brings a lot of web development experience and will no doubt be a valued member of the team.`,
        date: '2011-12-22',
        category: 'Amity News'
    },
    {
        slug: '100-div-fixes-width-when-using-jquery-cycle',
        title: '100% Div Fixes Width When Using JQuery Cycle',
        excerpt: 'If using a 100% DIV width for a jQuery Cycle container, jQuery Cycle will find the width of the container when its rendered and fix it to this width so when you then resize the browser the container stays at the fixed width.',
        content: `If using a 100% DIV width for a jQuery Cycle container, jQuery Cycle will find the width of the container when its rendered and fix it to this width so when you then resize the browser the container stays at the fixed width.

This means if you have a 100% wide DIV that is required to be centered, it will not stay central when resizing the browser.

I found the solution here:
<a href="http://stackoverflow.com/questions/3273137/jquery-cycle-slideshow-resize-problem/" target="_blank" rel="noopener noreferrer">http://stackoverflow.com/questions/3273137/jquery-cycle-slideshow-resize-problem/</a>

Just use !important for the DIV width:-
<pre class="brush:php;">#module_rotator
{
    width: 100% !important;
}</pre>`,
        date: '2011-12-07',
        category: 'Technical'
    },
    {
        slug: 'jquery-html-not-parsing-urls-properly',
        title: 'JQuery html() not parsing URLs properly',
        excerpt: 'Solving the issue of JQuery html() not parsing URLs properly',
        content: `Have been racking my brains for ages on this issue…

It is a Joomla site using sh404SEF. Turning sh404SEF off fixes this issue, so I assume it is a combination of sh404SEF and jQuery html().

I am using jQuery’s html() to replace the content one of one DIV by the content of another DIV. In the replacing text is a link, which contains a tilda ~ because the site is on a CPanel development domain.

When I replaced the content using jQuery's html() the link in the new content did not work, I have a 404 not found, even though the URL in the address bar was the exact correct URL! If I actually hit return after that URL the page showed. Very strange!!

I believe it is because html() is not encoding (decoding?) the HTML entities in the URL, i.e. the tilda. It is replacing it with the html code equivalent which is %7E. I guess the browser turns this back into the tilda but sh404SEF thinks its %7E and gives an error??

Anyway, found a simple solution from <a href="http://stackoverflow.com/questions/24816/escaping-html-strings-with-jquery" target="_blank" rel="noopener noreferrer">http://stackoverflow.com/questions/24816/escaping-html-strings-with-jquery</a>.

Just used the following line to decode the copying html before inserting it into the DIV.
<pre class="brush:jscript;">html = decodeURIComponent(html);</pre>`,
        date: '2011-12-02',
        category: 'Technical'
    },
    {
        slug: 'virtualbox-faster-than-parallels',
        title: 'VirtualBox faster than Parallels',
        excerpt: 'Am finding the FREE VirtualBox for Mac MUCH faster to run Windows 7 than Parallels Desktop 5.',
        content: `<p>
	Am finding the FREE VirtualBox for Mac MUCH faster to run Windows 7 than Parallels Desktop 5.</p>`,
        date: '2011-12-01',
        category: 'Technical'
    },
    {
        slug: 'joomla-blank-screen-how-to-show-errors',
        title: 'Joomla blank screen - how to show errors',
        excerpt: 'If you ever have a blank screen in Joomla, it is quite likely due to some errors, perhaps PHP errors. Errors are turned off by default so in order to display your errors, add the following to your configuration.php file at the bottom, before the closing PHP tag, and after the closing curly bracket:',
        content: `If you ever have a blank screen in Joomla, it is quite likely due to some errors, perhaps PHP errors. Errors are turned off by default so in order to display your errors, add the following to your configuration.php file at the bottom, before the closing PHP tag, and after the closing curly bracket:
<pre class="brush:php;">ini_set(‘display_errors’, 1);
error_reporting(E_ALL);</pre>`,
        date: '2011-11-02',
        category: 'Technical'
    },
    {
        slug: 'mac-documents-folder-clutter-fix',
        title: 'Mac Documents Folder Clutter Fix',
        excerpt: 'For some reason Apple and App developers, one or the other or both, decided to dump a tonne of software data files and folders into what should be your nicely organised, personal documents folder.',
        content: `For some reason Apple and App developers, one or the other or both, decided to dump a tonne of software data files and folders into what should be your nicely organised, personal documents folder. If you like to be organised like me this probably annoys you some. I mean, how are we supposed to easily find our own personal folders amongst all this unnecessary clutter.
To solve this I have abandoned the Documents folder all together. Here is my solution…
<ol>
 	<li>Create a new folder the same level as Documents. Call it what you want, mine is called My Documents.</li>
 	<li>Move all your personal folders into it</li>
 	<li>Hide the Documents folder (see below for command)</li>
 	<li>Remove the Documents folder from the sidebar</li>
 	<li>Add your new documents folder to the sidebar</li>
</ol>
Yo can even copy the main Documents folder icon to use on your own folder (but not the sidebar icon).
To hide a file or folder there are a few low cost apps available but I like to keep it simple and use he command line:-
cd ~
/Developer/Tools/setfile -a V Documents`,
        date: '2011-11-02',
        category: 'Technical'
    },
    {
        slug: 'using-ffmpeg-on-a-mac-the-easy-way',
        title: 'Using ffmpeg on a Mac the easy way!',
        excerpt: 'There are various complicated posts online about installing ffmpeg on a mac so you can use it from the command line. I never quite have the patience for command line installations and often things did not work. But then I stumbled upon a much easier way…',
        content: `There are various complicated posts online about installing ffmpeg on a mac so you can use it from the command line. I never quite have the patience for command line installations and often things did not work. But then I stumbled upon a much easier way…

First install Video Monkey, which as a GUI video processor is fantastic and my app of choice for video processing. <a href="http://videomonkey.org/" target="_blank" rel="noopener noreferrer">http://videomonkey.org/</a>. The drawback is you cannot customise the variables like video size and bitrate. You need ffmpeg on the command line.

Well I notice Video Monkey is only a GUI for ffmpeg which is installed with it anyway, its in:
“/Applications/VideoMonkey.app/Contents/Resources/bin/ffmpeg”

So you can just call this line from the command line, with your required arguments after it, and use that ffmpeg!

To make life easier, just add this to the command line path by making a symbolic link to it in /usr/local/bin/ so you can use just ffmpeg on the command line instead of the full path above: sudo ln -s /Applications/VideoMonkey.app/Contents/Resources/bin/ffmpeg ffmpeg

So much easier than all the other websites on this topic!`,
        date: '2011-09-08',
        category: 'Technical'
    },
    {
        slug: 'allowing-ie8-to-render-websites-like-ie7',
        title: 'Allowing IE8 to render websites like IE7',
        excerpt: 'It is well known all Internet Explorer browsers render content differently, and we used to have different stylesheets for different versions.',
        content: `It is well known all Internet Explorer browsers render content differently, and we used to have different stylesheets for different versions.

With IE8 you can add in a META tag to tell IE8 to render websites like IE7. So this means no need to have yet another stylesheet for IE8, it can use the IE7 stylesheet.

The following code in the HEAD section BEFORE the stylesheets will achieve this:
<pre class="brush:xml;">&lt;meta http-equiv=”X-UA-Compatible” content=”IE=EmulateIE7” /&gt;</pre>
But in Joomla, if you use the recommended way to insert a stylesheet into your template (using $document-&gt;addStyleSheet) AND you want your &lt;title&gt; to come first, you cannot easily add this code without hacking core files.

So to achieve this you can insert this line in Joomla index.php using the following code BEFORE your $document-&gt;addStyleSheet code.
<pre class="brush:xml;">$this-&gt;setMetaData( ‘X-UA-Compatible’, ‘IE=EmulateIE7’, true );</pre>`,
        date: '2011-09-07',
        category: 'Technical'
    },
    {
        slug: 'extract-files-from-an-iphone-backup',
        title: 'Extract Files from an iPhone Backup',
        excerpt: 'Due to downgrading an iPhone 3G from iOS 4 to iOS3, I needed to then extract all the media/images files from the iOS 4 backup so I can put back onto the iOS 3. The iPhone/iPod Touch Backup Extractor program works like a charm:',
        content: `<p>
	Due to downgrading an iPhone 3G from iOS 4 to iOS3, I needed to then extract all the media/images files from the iOS 4 backup so I can put back onto the iOS 3.<br />
	The iPhone/iPod Touch Backup Extractor program works like a charm:<br />
	<a href="http://supercrazyawesome.com/" target="_blank" rel="noopener noreferrer">http://supercrazyawesome.com/</a></p>`,
        date: '2011-09-06',
        category: 'Technical'
    },
    {
        slug: 'web-design-in-cardiff-by-amity-web-solutions',
        title: 'Web Design in Cardiff by Amity Web Solutions',
        excerpt: 'Escape the hustle and bustle for your Cardiff Web Design project. Pop over the mountain and visit us in beautiful Caerphilly for very competitive quotes at the highest standard of website design.',
        content: `<p class="h2">Escape the hustle and bustle for your Cardiff Web Design project. Pop over the mountain and visit us in beautiful Caerphilly for very competitive quotes at the highest standard of website design.</p>
<p>As the leading web development company in Caerphilly, just a few miles from Cardiff, we are in a prime location to serve Cardiff Web Design, and all surrounding areas too! Whether you take the short, scenic drive over Caerphilly mountain, the quiet and windy country lanes through Rudry or the plain and simple drive up Nantgarw hill, you will not be disappointed with not only the level of quality of our service and our highest standard of websites, but the competitive prices too. Being a Caerphilly based company means we can provide the same level of service as Cardiff's top web development agencies at lower costs.<br /> <br /> Not only can we deliver websites compliant with standards and accessibility guidelines and optimised for page speed load times (a factor Google recently introduced for rankings), but because we work with a leading graphic design agency it ensures you have a bespoke and high standard design that will truly impress your visitors and reflect the high standards of your own products and services.<br /> <br /> Please feel free to <a href="/contact-us/">contact us</a> for more information. We are happy to pop over to Cardiff and come visit you too!</p>`,
        date: '2011-08-24',
        category: 'Amity News'
    },
    {
        slug: 'flash-of-jquery-hidden-content-before-js-is-called-to-hide-it',
        title: 'Flash of Jquery hidden content before JS is called to hide it',
        excerpt: 'Solving the issue of showing hidden content on a page before JQuery is loaded and hides it',
        content: `This applies to when you use jQuery to hide an element, and not the CSS. What happens is the element you want to hide in jQuery briefly gets shown after the page is rendered and before the jQuery is called to hide it.

A common solution is just hide the element in the CSS. The problem then is people with JS disabled browsers will not be able to see the content, because they don’t have JS to show it.

Add in a line of JavaScript at the top of the page to add a class to the HTML tag. Then in your stylesheets you can hide the elements, referencing the JS added tag in the HTML.

e.g.
// In your HTML &lt;head&gt;
<pre class="brush:xml;">&lt;script type=”text/javascript”&gt;document.getElementsByTagName(‘html’)[0].className+=’js’&lt;/script&gt;</pre>
// In your Stylesheet
<pre class="brush:css;">.js .myHiddenElement
{
    display: none;
}</pre>
Now JS disabled browsers will see the content, and JS enabled browsers will hide it before the page is rendered by referencing the JS added class in the &lt;html&gt; tag.

Brilliant`,
        date: '2011-08-17',
        category: 'Technical'
    },
    {
        slug: 'where-are-the-portable-digital-note-taking-tablets',
        title: 'Where are the portable digital note taking tablets?',
        excerpt: 'Just wondering where all the pens are for digital tablets',
        content: `<p>
	Am currently using an iPad with Penultimate note taking app, and using a Just Mobile Alupen stylus. I can see what I write and sketch, erase, colour and more. When finished I email it to</p>
<p>
	Evernote. It&rsquo;s fantastic. Almost. The problem is the iPad capacitive screen means it&rsquo;s no good for pointy stylus, it needs a big fat finger like stylus. So it&rsquo;s not very accurate when it comes to writing.</p>
<p>
	Alternatives are digital pens and notebooks, but they don&rsquo;t have the advantages of a visible, editable screen, with undo and erase, colour etc. Nor do they email.</p>
<p>
	Wacom tablets and the like connect to a computer and your monitor is the screen. So not portable.</p>
<p>
	So in this tablet day and age, where is the perfect digital note taking solution? Why do we not have an accurate digital note taking device?</p>
<p>
	If anyone has some suggestions please let me know!</p>`,
        date: '2011-08-04',
        category: 'Technical'
    },
    {
        slug: 'what-is-content-management',
        title: 'What is Content Management?',
        excerpt: 'Content Management refers to systems that allow the website owner or administrator to be able to access an administration area to edit, add, delete and manage your own content on your website.',
        content: `Content Management refers to systems that allow the website owner or administrator to be able to access an administration area to edit, add, delete and manage your own content on your website. It <strong>saves time and money</strong> and ensures your website can stay up to date with the information you want, when you want it.

Traditional website systems may not allow content to be managed but may still be costly to build and implement. Additional costs may be incurred to make small, regular changes because website owners may have to contact the web designers to make them.

With Content Managed systems you do not have to contact the system designer. Simply log in to your own, private administration area and make regular updates to your website yourself.
<p class="h2">Formatting Your Webpage Content</p>
The interface allows easy formatting of the content such as:-
<ul>
 	<li>Bold, Italic, Underline</li>
 	<li>Insert Tables</li>
 	<li>Insert Images</li>
 	<li>Insert Hyperlinks</li>
 	<li>Align text</li>
 	<li>Bullet and numbered lists</li>
 	<li>More...</li>
</ul>
<p class="h2">Added Functionality</p>
The content management system provided even more benefits because it supports adding in additional functionality easily such as:-
<ul>
 	<li>Forums</li>
 	<li>shopping Carts</li>
 	<li>Document Managers</li>
 	<li>Business Directories</li>
 	<li>Online Chat and Support Systems</li>
 	<li>Surveys</li>
 	<li>Events and Calendars</li>
 	<li>User Registration and Private Pages</li>
 	<li>More...</li>
</ul>`,
        date: '2011-07-01',
        category: 'CMS'
    },
    {
        slug: 'graphic-design-caerphilly',
        title: 'Graphic Design Caerphilly',
        excerpt: 'As part of our website design and development services we undertake a wide range of graphic design services for customers, such as website design, brochure design, flyer design, business card design, print design and printing.',
        content: `<p>As part of our <strong>website design</strong> and development services we undertake a wide range of graphic design services for customers, such as <strong>website design</strong>, <strong>brochure design</strong>, <strong>flyer design</strong>, <strong>business card design</strong>, <strong>print design</strong> and <strong>printing</strong>.      <br /><br />As well as having in-house graphic design and technical skills we also work closely with leading companies for <a href="http://www.roseinnesdesigns.com/" target="_blank" rel="noopener noreferrer">graphic design in caerphilly</a> for more advanced design and printing services. <br /><br />We have a wide variety of customers and high standard portfolio of graphic design, please feel free to <a href="/contact-us/">drop us a line</a> if you are interested in <strong>graphic design in Caerphilly</strong>, Cardiff, Newport and surrounding areas. <br /><br />Thanks from the team at Amity Web Solutions</p>`,
        date: '2011-06-01',
        category: 'Amity News'
    },
    {
        slug: 'adding-a-module-position-loadposition-inside-another-module-in-joomla',
        title: 'Adding a module position (loadposition) inside another module in Joomla',
        excerpt: 'Here is a good way to use {loadposition} inside another module without hacking core files or using extensions in Joomla…',
        content: `Here is a good way to use {loadposition} inside another module without hacking core files or using extensions in Joomla…
1) First copy templates/system/html/modules.php into your_template/html/ override folder so we don't change the core file.

2) Then copy the loadposition plugin code (see below) into this file as new functions.

3) I change reference to plgContentLoadModule, plgContentProcessPositions and plgContentLoadPosition to plgModuleLoadModule, plgModuleProcessPositions and plgModuleLoadPosition so we don't get conflict with the actual loadposition functions.

4) I also change reference to $row-&gt;text to $module-&gt;content

5) I then call the function plgModuleLoadModule($module, &amp;$params); to replace the module content with the new content with the loadposition content in it. e.g.
<pre class="brush:php;">&lt;?php $module-&gt;content = plgModuleLoadModule($module, &amp;$params); ?&gt;</pre>
Code to add into modules.php:-
<pre class="brush:php;">function plgModuleLoadModule( &amp;$module, &amp;$params, $page=0 )
{
   $db =&amp; JFactory::getDBO();
   // simple performance check to determine whether bot should process further
   if ( JString::strpos( $module-&gt;content, ‘loadposition’ ) == false ) {
      return $module-&gt;content;
   }

   // expression to search for
   $regex = ‘/{loadpositions*.*?}/i’;

   $pluginParams = new JParameter( $plugin-&gt;params );

   // check whether plugin has been unpublished
   if ( !$pluginParams-&gt;get( ‘enabled’, 1 ) ) {
      $module-&gt;content = preg_replace( $regex, ”, $module-&gt;content );
      return true;
   }

   // find all instances of plugin and put in $matches
   preg_match_all( $regex, $module-&gt;content, $matches );

   // Number of plugins
   $count = count( $matches[0] );

   // plugin only processes if there are any instances of the plugin in the text
   if ( $count ) {
      // Get plugin parameters
       $style   = $pluginParams-&gt;def( ‘style’, -2 );

      plgModuleProcessPositions( $module, $matches, $count, $regex, $style );
   }
  
   return $module-&gt;content;
}

function plgModuleProcessPositions ( &amp;$module, &amp;$matches, $count, $regex, $style )
{
   for ( $i=0; $i &lt; $count; $i++ )
   {
      $load = str_replace( ‘loadposition’, ”, $matches[0][$i] );
      $load = str_replace( ‘{‘, ”, $load );
      $load = str_replace( ‘}’, ”, $load );
      $load = trim( $load );

      $modules   = plgModuleLoadPosition( $load, $style );
      $module-&gt;content    = str_replace($matches[0][$i], $modules, $module-&gt;content );
   }

     // removes tags without matching module positions
   $module-&gt;content = preg_replace( $regex, ”, $module-&gt;content );
  
   return $module-&gt;content;
}

function plgModuleLoadPosition( $position, $style=-2 )
{
   $document   = &amp;JFactory::getDocument();
   $renderer   = $document-&gt;loadRenderer(‘module’);
   $params      = array(‘style’=&gt;$style);

   $contents = ”;
   foreach (JModuleHelper::getModules($position) as $mod)  {
      $contents .= $renderer-&gt;render($mod, $params);
   }
   return $contents;
}</pre>`,
        date: '2011-06-01',
        category: 'Technical'
    },
    {
        slug: 'grant-funding-available-in-merthyr-tydfil-for-websites-and-shopping-carts',
        title: 'Grant Funding Available in Merthyr Tydfil for Websites and Shopping Carts',
        excerpt: 'The Local Investment Fund (LIF) can provide up to 40% of eligible expenditure up to a maximum of £10,000 (minimum grant £1000) toward the costs for the design, development and hosting of your website and/or shopping cart.',
        content: `The Local Investment Fund (LIF) can provide up to <strong>40%</strong> of eligible expenditure up to a maximum of<strong> £10,000</strong> (minimum grant £1000) toward the costs for the design, development and hosting of your website and/or shopping cart.

<a href="/contact-us" target="_self" rel="noopener noreferrer">Contact Us</a> if you would like to know more information or help in applying for a grant.
<ul>
 	<li><a href="/blog/grant-funding-availability-in-caerphilly-for-websites-and-shopping-carts/">Caerphilly Grants</a></li>
 	<li>Rhondda Cynon Taff Grants</li>
 	<li>Newport Grants</li>
 	<li>Torfaen Grants</li>
 	<li>Blaenau Gwent Grants</li>
</ul>
<a href="/contact-us" target="_self" rel="noopener noreferrer">Contact Us</a> if you would like to know more information or help in applying for a grant.`,
        date: '2011-05-10',
        category: 'Amity News'
    },
    {
        slug: 'what-is-open-source',
        title: 'What is Open Source?',
        excerpt: 'Open Source refers to software that has been developed and released with the source code open and available to everyone for download and redistribution. This allows any expert developer to be a part of the development team and contribute to the development, testing and bug fixing, ensuring software is not only developed and improved at a very fast pace, but thoroughly tested.',
        content: `<p>Open Source refers to software that has been developed and released with the source code open and available to everyone for download and redistribution. This allows any expert developer to be a part of the development team and contribute to the development, testing and bug fixing, ensuring software is not only developed and improved at a very fast pace, but thoroughly tested.&nbsp; This fantasic revolution in the software industry has resulted in a dramatic increase in software choice for consumers and has advanced software development beyond the restrictions of commercial software.</p>
<p>Open Source software is released under license. The licenses do restrict what distributors and developers can do with it, although this is only for the good of open source and ensures software remains open and development is supported.</p>
<p><strong>More Information...</strong></p>
<ul>
<li><a href="http://www.opensource.org/" target="_blank" rel="noopener noreferrer">Open Source Initiative (OSI)</a></li>
<li><a href="http://www.fsf.org/" target="_blank" rel="noopener noreferrer">Free Software Foundation</a></li>
<li><a href="http://www.nosi.net/" target="_blank" rel="noopener noreferrer">NonProfit Open Source Initiative</a></li>
</ul>`,
        date: '2011-05-01',
        category: 'Advice'
    },
    {
        slug: 'changing-create-date-and-time-of-video-imported-from-mini-dv',
        title: 'Changing create date and time of video imported from Mini DV',
        excerpt: 'Changing create date and time of video imported from Mini DV',
        content: `<p>
	I recently imported some Mini DVs of videos I took over the past year and a half but because iPhoto/iMovie orders them by create date and time, which is the imported file and not when the video was recorded, my videos were out of place in my ordering of photos and videos. I needed to change the create date and time of file itself so they appear in the correct order.<br />
	The easiest method I found which allows batch changing of create and modify date and time is described on this site here http://danilo.ariadoss.com/howto-change-date-modified-date-created-mac/.</p>
<pre class="brush:bash;">
touch -mt 200801120000 path-to-folder/*</pre>`,
        date: '2011-04-01',
        category: 'Technical'
    },
    {
        slug: 'amity-web-solutions-is-the-bestof-best-loved-company-in-caerphilly',
        title: 'Amity Web Solutions is the BestOf Best Loved Company in Caerphilly',
        excerpt: 'We are very proud to be announced as the Best Of Caerphilly\'s Best Loved Company 2001 from their 14 Days of Love campaign. We try very hard to please all our customers, big and small, and the testimonials we have received from customers has resulted in us winning the top spot.',
        content: `<p>We are very proud to be announced as the Best Of Caerphilly's Best Loved Company 2001 from their 14 Days of Love campaign. We try very hard to please all our customers, big and small, and the testimonials we have received from customers has resulted in us winning the top spot.<br /><br />A big thank you to all our customers who praised our services to the Best Of!</p>`,
        date: '2011-03-22',
        category: 'Amity News'
    },
    {
        slug: 'caerphilly-business-forum-new-year-new-start-event',
        title: 'Caerphilly Business Forum New Year New Start Event',
        excerpt: 'The Caerphilly Business Forum are holding a New Year New Start event at Tredomen in Ystrad Mynach on the 10th of February aimed at providing support for people that have started or thinking of starting a new business in 2011.',
        content: `The Caerphilly Business Forum are holding a <strong>New Year New Start</strong> event at Tredomen in Ystrad Mynach on the 10th of February aimed at providing support for people that have started or thinking of starting a new business in 2011.

All businesses, new and existing, are welcome, and would benefit business as a networking opportunity or to to find out more information about certain products and services that may be of interest. Laurence Cope from Amity Web Solutions will be attending to provide information and advice about website design and development and the options available.

It promises to be a good event, and as it’s <strong>FREE</strong> make the most of the networking opportunity.

If you feel this may be of interest to anyone please can you forward this message on.`,
        date: '2011-01-21',
        category: 'Amity News'
    },
    {
        slug: 'joomla-1-6-is-released',
        title: 'Joomla 1.6 is Released',
        excerpt: 'The long awaited release of Joomla 1.6 has arrived. We are very excited to get our hands on this and try out all the new features and improvements. Joomla 1.5 was, and still is, a fantastic, powerful, feature rich and user friendly system and was a huge leap forward from Joomla 1.0 so we are quite keen to see if the Joomla 1.6 release is just a big step forward as 1.5.',
        content: `<p>The long awaited release of Joomla 1.6 has arrived. We are very excited  to get our hands on this and try out all the new features and  improvements. Joomla 1.5 was, and still is, a fantastic, powerful,  feature rich and user friendly system and was a huge leap forward from  Joomla 1.0 so we are quite keen to see if the Joomla 1.6 release is just  a big step forward as 1.5.    <br /><br />From the Joomla site...<br /><br />"<em>Joomla 1.6 delivers new features to end-users and site administrators including:<br /></em></p>
<ul>
<li><em>Finer access controls for viewing and editing content with configurable user groups and viewing levels</em></li>
<li><em>A user-defined category structure, from simple one-level to complex multi-level categories</em></li>
<li><em>Installation improvements allowing for multiple extension installations in one package, updatable with a single click</em></li>
<li><em>Expanded language support for easy production of multi-lingual sites</em></li>
<li><em>Start and end publishing times for modules with more control over where they display,</em></li>
<li><em>Fresh new templates and semantic markup to please the eye as well as the search engines</em></li>
<li><em>More creative control through template styles</em></li>
<li><em>Hundreds of additional features, streamlining workflow and productivity"</em></li>
</ul>
<p>Read more here <a href="http://www.joomla.org/announcements/general-news/5348-joomlar-16-has-arrived.html" target="_blank" rel="noopener noreferrer">http://www.joomla.org/announcements/general-news/5348-joomlar-16-has-arrived.html</a></p>`,
        date: '2011-01-13',
        category: 'Amity News'
    },
    {
        slug: 'grant-funding-in-caerphilly-and-other-south-wales-valleys-increases-to-1000',
        title: 'Grant Funding in Caerphilly and other South Wales Valleys Increases to £10,000',
        excerpt: 'The Local Investment Fund (LIF) grant which can help fund new website development and marketing has been increased from £5,000 to £10,000 to meet up to 40% of the cost of capital investments.',
        content: `<p>
	The Local Investment Fund (LIF) grant which can help fund new website development and marketing has been increased from &pound;5,000 to &pound;10,000 to meet up to 40% of the cost of capital investments.<br />
	<br />
	The LIF is a package of flexible financial support to assist new and existing businesses by offering capital grants of 40% of eligible projects, subject to a minimum of &pound;1,000 and a maximum of &pound;10,000 grant.</p>`,
        date: '2010-12-07',
        category: 'Amity News'
    },
    {
        slug: 'importance-of-updating-upgrading-your-website',
        title: 'Importance of Updating/Upgrading Your Website',
        excerpt: 'With the recent attack on the Royal Navy website I thought it prudent to explain the importance of upgrading and updating your website, not only for security reasons to prevent attacks like this but for a variety of other positive reasons.',
        content: `<p>With the <a href="http://www.bbc.co.uk/news/technology-11711478" target="_blank" rel="noopener noreferrer">recent attack on the Royal Navy</a> website I thought it prudent to explain the importance of upgrading and updating your website, not only for security reasons to prevent attacks like this but for a variety of other positive reasons.</p>
<p class="h2">Updating/Upgrading a Website</p>
<p>All websites would have been written using technology available at that time to a design concept that may have been &ldquo;modern&rdquo; or &ldquo;fashionable&rdquo; at that time, whether it be plain old HTML for static sites, or dynamic database content managed sites.</p>
<p>It is extremely common that the coding and technology used was not completely perfect and issues may exist such as certain functions not working or security exploits hackers will find. In time these these bugs and security issues may come to light and be fixed within the original code and technology used to build your website.</p>
<p>The problem is your website is already built and will not benefit from these improvements. Your web developer would need to implement these fixes into your site to ensure you benefit from these improvements.</p>
<p>This is known as updating or upgrading your website to the latest and improved version.</p>
<p class="h2">Why Should I Update My Website?</p>
<p>There are many reasons to update your website, some more important than others, but all are necessary if you want to maximise the effectiveness of your website and protect your business from attack.</p>
<h3>Security</h3>
<p>Arguably the most important reason to keep your website updated and especially true for eCommerce sites that store sensitive customer data on their database.</p>
<p>For a content management system that has an administration interface and relies upon the server executing scripts, it is vital that all known &ldquo;holes&rdquo; a hacker could use to gain entry to your site are plugged. If not then it may be possible a hacker could gain entry to your site and access sensitive data, deface your website or use your server to attack other websites and computers around the world.</p>
<p>For the same reasons, it is just as important to make sure your server and it&rsquo;s software the website is hosted on are also up to date, so even if you do not have a content managed website, server updates are just as important.</p>
<h3>Bugs</h3>
<p>It is extremely common all software when released will have bugs that were not identified previously. Being a computer user you probably know the frustration when things don&rsquo;t work! It&rsquo;s the same for websites. It is likely the coding is not 100% perfect and something, somewhere may not work as expected. For off the shelf systems with an active development it is likely the bugs will be fixed, if known, in future updates.</p>
<h3>Browser Compatibility</h3>
<p>When a new versions of a browser is released it is quite possible that it will interpret the website differently to the older browser. This issue mainly exists in the Internet Explorer range of browsers. The move from Internet Explorer 6 to 7 saw one of the biggest changes in the way browsers interpret website code as IE7 moved closer to adopting web standards. This is because Internet Explorer 6 was (is) well, quite rubbish really (yet so many people still use it!).&nbsp; So your website may look perfect for IE6 if that was the latest version when it was built, but some things may be out of place with Internet Explorer 7. Differences occurred again from the move to Internet Explorer 8 and I am expecting more differences with the imminent release of Internet Explorer 9.</p>
<p>If you want a consistent look across all browsers, it is very important your website is checked and updated with every major release of popular browsers (mostly true for IE).</p>
<h3>Benefit from Technology (Goodbye Flash and Hello HTML5 &amp; CSS3)</h3>
<p>HTML4, the version of HTML used to build websites, has been around for about 10 years! Quite a timescale for internet technology. Standards have moved on and the with the release of HTML5 and CSS3 we have far more features to take advantage of for websites. Whereas previously it would be common to use Flash for simple things like playing a video or simple animations, and images to make round corner boxes and shadows, we can now use plain HTML5 and CSS3 instead. Websites can be dramatically improved using HTML5 and CSS3.</p>
<p>The only problem is browsers need to support it and once again IE let&rsquo;s us down. We have to wait for IE9 to be released and everyone use it, before it becomes common practice. I suspect it will take years to update IE users to the latest version though, so we still need to fallback to HTML4 for websites for many years to come.</p>
<p>Other technology has also been developed such as Javascript frameworks (JQuery, Prototype etc.) allowing us to abandon standard, clunky Javascript coding for a more user friendly and feature rich techniques to dramatically improve website user experience.</p>
<h3>Improve Speed</h3>
<p>Google now includes page load speed time ads a ranking factor so it&rsquo;s important your website loads as fast as possible. With new technologies and methods to speed up websites it&rsquo;s likely your older website could do with a speed boost and gain some extra points with Google. Specific areas to look at would be optimising images, using compression on the server, caching websites and minifying CSS and Javascript.</p>
<h3>Functionality and Features</h3>
<p>If you use an old content management system it is likely a more updated version would provide more features not possible in your older system. Perhaps an improved &ldquo;insert image&rdquo; process exists for example, allowing you to resize images on upload rather than use that slow to download 3Mb digital camera file.</p>
<h3>Social Networking and Marketing</h3>
<p>Social Networking has exploded. More and more people are online and the internet their primary source of information and reference. Your website needs to get on the bandwagon or be left behind. Updating your website to integrate with social networking is considered quite an important marketing strategy.</p>
<p>Search engines constantly update their ranking methods, such as the above speed factor, so keeping up to date and updating your website is important to ensure your rankings are maintained.</p>
<h3>Improved Content Management and Maintenance</h3>
<p>In time you are likely to have a much better understanding of how you use your website compared to when you first built it. Therefore it may be possible to streamline the administration and maintenance side of the website to make it easier for you to manage and add content. For example, maybe you are adding Latest News to several locations on the website whereas the website could be configured to add the news in all the different locations at the same time therefore reducing the time it takes you to add the news.</p>
<h3>Modern Design</h3>
<p>The most visual aspect of a website will sadly look dated over time. You know that 70&prime;s block of flats down the road that&rsquo;s a bit of an eye sore? Your website may be the online equivalent, putting people off using your services or buying your products. It may not represent quality any more. So definitely time for a design update. I would say a redesign is required once every year or two.</p>
<h3>Good for business</h3>
<p>With more new features on your website such as social network integration, perhaps a latest news or customer testimonials listing, a better user interaction with some JQuery effects, a brand new, modern design representing better quality and professionalism, a much faster load time and a lot more, you will certainly see a boost in traffic and business following a website upgrade.</p>
<p>In addition you can email your contact database to let them know of the improvements and how they will benefit from them, resulting in an increase in visitors and hopefully business.</p>
<h3>What Next?</h3>
<p>Upgrading does of course come at a price&hellip; it is likely you will have to commission your web developer to perform the upgrade, which is likely to cost some. If you have a content management system that supports easy upgrade, and no bespoke changes have been made, hopefully upgrading will be a straightforward and low cost process meaning you can afford regular updates and benefit from a new and improved website.</p>`,
        date: '2010-11-22',
        category: 'Design/Development'
    },
    {
        slug: 'tips-for-using-the-joomla-content-manager-and-editor',
        title: 'Tips for Using The Joomla Content Manager and Editor',
        excerpt: 'These are some of my favourite handy tips in using the editor within the Joomla Content Management system. I hope to add to this list as time goes on so be sure to check back now and again for more, and please feel free to comment your own ideas I can add to the list.',
        content: `<p>These are some of my favourite handy tips in using the editor within the Joomla Content Management system. I hope to add to this list as time goes on so be sure to check back now and again for more, and please feel free to comment your own ideas I can add to the list.</p>
<p class="h2">Joomla CMS Hints and Tips</p>
<ul>
<li>When making a lot of changes to a web page, copy the original code and save it, in case you want to revert back. To do this just click the show/hide text at the top to view the code, select and copy all of it and paste it in a text editor until you are happy you do not need it anymore.</li>
<li>The site width is wider than the default width of the content, so it may not look lined up in the content manager. So expand the content manager editor window by dragging the bottom right corner. Then you can resize to see the same size as the web page and everything lines up OK.</li>
<li>In order to keep conformance with web standards it is not best to use the Bold, Italic, Underline etc. text formatting in content editors (even though they are there to help content managers). The code they may enter may not conform. So it is always best to have the web developer create your styles in the &ldquo;stylesheet&rdquo; then you can choose the styles you need to apply (e.g. bold, italic) by choosing this style in the Styles drop down. Stylesheets are the preferred method for formatting and layout so get to know them!</li>
<li>Clicking &ldquo;Save&rdquo; will save your changes and exit out of the page, but maybe you have not finished and need to edit it some more. It can be annoying to keep exiting out and going back in all the time, so use Apply instead of Save, this will keep you within the editing screen.</li>
<li>Regularly use &ldquo;Apply&rdquo; or &ldquo;Save&rdquo; to ensure your changes are saved often</li>
<li>Editing a page locks it so no one else can make changes at the same time. So if you just want to exit out of the page and have not made any changes to save do not just close the browser which many people do as the page will remain locked. Be sure to click &ldquo;Close&rdquo; because this unlocks the page for people to edit later.</li>
<li>By clicking the Meta data Information tab on the right you can enter your a META Description which is good for search engines.</li>
<li>You can enter your own custom page titles (with important keywords) following the process on this blog <a href="/blog/joomla-tutorial-creating-a-custom-page-title-title-tag-to-improve-seo" title="Joomla Tutorial &ndash; Creating a Custom Page Title (Title Tag) to Improve SEO">Joomla Tutorial &ndash; Creating a Custom Page Title (Title Tag) to Improve SEO</a>.</li>
<li>Sometimes I want the page heading to be different to the page name in the editor, so choose &ldquo;Show Title = No&rdquo; in the right hand &ldquo;Parameters (Advanced)&rdquo; tab and enter your own heading at the top selecting Format H1.</li>
<li>If you have content in Word you would like to paste into a page, then be very careful! Either use the &ldquo;Paste from Word&rdquo; button or paste plain text only. See this blog for more information: <a href="/blog/why-you-should-not-copy-and-paste-from-word-into-your-content-management-sy" title="Why You Should Not Copy and Paste from Word into Your Content Management System">Why You Should Not Copy and Paste from Word into Your Content Management System</a>.</li>
<li>Check your spelling! It&rsquo;s easy to miss but there is a spell checker included in the editor, so use this before publishing any content.</li>
<li>Using cache is a great way to speed up your website. See this blog for more information: <a href="/blog/speed-up-your-website-by-using-cache/" title="Speed Up Your Website By Using Cache">Speed Up Your Website By Using Cache</a>.</li>
<li>Filter content to help manage articles and modules when you have quite a lot &ndash; when viewing the list of Articles or Modules use the Filter drop downs on the top right to filter by Section or Category for Articles or Position or Type for Modules. So for Articles this is useful to only list your News items for example, or in Modules to only list the right hand column modules.</li>
<li>Similarly you can use the Filter search box on the top left to search for specific words within the article or module title.</li>
</ul>`,
        date: '2010-10-07',
        category: 'CMS'
    },
    {
        slug: 'why-you-should-not-copy-and-paste-from-word-into-your-content-management-sy',
        title: 'Why You Should Not Copy and Paste from Word into Your Content Management System',
        excerpt: 'It is very common for website owners to create or be given content in a Microsoft Word document and they copy and paste that directly from Word into the content management system. This is not the correct way to copy your content onto your website and could lead to potential problems, even the website page not working. This blog explains why and what you should do instead.',
        content: `<p>It is very common for website owners to create or be given content in a Microsoft Word document and they copy and paste that directly from Word into the content management system. This is not the correct way to copy your content onto your website and could lead to potential problems, even the website page not working. This blog explains why and what you should do instead.</p>
<p class="h2">Why You Should Not Copy and Paste from Word</p>
<p>In order to format the text in Word, i.e. make it bold, underline etc. some special code is required for the software to format the text like this. The user cannot see this code, it is &ldquo;behind the scenes&rdquo;. The code used is not standard HTML but Microsoft Word coding that will not be interpreted by many popular browsers (including Microsoft Internet Explorer!). When you copy and paste content from Word into a website content manager that code can be copied over with the content (behind the scenes) and inserted onto the web page too. It may look OK on some browsers, or even in the content manager, but behind the scenes there is some non-standard code that will break the website and it may not display correctly. Therefore content must never be directly copied and pasted from Word to the content manager at all.</p>
<p class="h2">What You Should Do</p>
<p>I always say in order to get the best code and layout for your content managed page you should format the content within the content manager itself. So do not rely on copying the content and format from Word, just paste into the editor plain text and then format it.</p>
<p>A little tip to do this is open up your favourite Text editor (Notepad, Notepad++, Textpad etc.) then copy the content from Word into the text editor. Text editors do not have formatting like Word, they can only show plain text, so when you copy and paste all the formatting code behind the scenes is stripped out and you are left with plain text only. You may need to re-enter line breaks, but line breaks usually copy across OK.</p>
<p>Once you have the text in the editor as plain text, then you can copy and paste this text into the content manager. The copied text is plain text so no non-standard code will be copied across. All your formatting in Word will be stripped out, so you then need to use the content manager to re-format the content such as any headings, bold text, hyperlinks etc. and re-insert any images.</p>
<p class="h2">An Easier Way</p>
<p>Many website content manager systems (like Joomla and WordPress for example) use page editors that include a &ldquo;Paste from Word&rdquo; and a &ldquo;Paste as Plain Text&rdquo; button. Using these buttons will make it easier to copy your text across.</p>
<p>Using the &ldquo;Paste as Plain Text&rdquo; button will allow you to paste your content from Word into the editor as plain text, i.e. you will get the same result as above but skip the need to use a text editor.</p>
<p>The &ldquo;Paste from Word&rdquo; button tries to help one step further. This button allows you to paste your Word content but tries to keep the Word formatting by changing the Microsoft code to HTML. This is the preferred method if it works.</p>
<p class="h2">Summary</p>
<p>So in summary, first try the Paste from Word button if you have it, and if that fails try the Paste as Plain Text button. If you have neither of these buttons use a text editor to copy and paste Word content into first.</p>`,
        date: '2010-08-25',
        category: 'CMS'
    },
    {
        slug: 'different-types-of-web-site-hosting-which-is-best-for-you',
        title: 'Different Types of Web Site Hosting – Which is Best for You',
        excerpt: 'Following on from my recent posts Static or Dynamic (Content Managed) Website and Choosing the Right Type of Website Design, part 3 of my Choosing the Right Website Series focuses on the different hosting options websites and the advantages and disadvantages of each one.',
        content: `<p>Following on from my recent posts <a href="/blog/static-or-dynamic-content-managed-website-which-one-is-best/" target="_blank" rel="noopener noreferrer">Static or Dynamic (Content Managed) Website</a> and <a href="/blog/choosing-the-right-type-of-website-design/" target="_blank" rel="noopener noreferrer">Choosing the Right Type of Website Design</a>, part 3 of my <strong>Choosing the Right Website Series</strong> focuses on the different hosting options websites and the advantages and disadvantages of each one.</p>
<p>&nbsp;</p>
<p>There are many different types of website hosting services available each of which depends upon the website requirements and your budget. I wont be discussing all types of hosting services, but explaining the most common hosting services for standard business or personal websites.</p>
<p class="h2">Types of Website Hosting</p>
<h3>Shared Hosting</h3>
<p>A Shared Hosting service is when a website is placed on a server alongside other websites, usually completely unrelated to one another, each one sharing the computer resources like memory and processor. A shared server could have anywhere between hundreds to thousands of websites on it.</p>
<p>Typical costs for a shared hosting account would be as little as a few pounds (sometimes free) to up to &pound;10 per month depending on the services and resources purchased*.</p>
<p><em>Advantages</em></p>
<p>The advantages of a shared hosting server are typically cost benefits. Having just one server host hundreds of website means the service provider can share the cost of the server between many customers, each one paying a relatively small amount compared to the full server cost.</p>
<p>The server is also managed on your behalf, you would not need to worry about any installation, monitoring or maintenance, that should all be taken care of by the provider.</p>
<p><em>Disadvantages</em></p>
<p>With so many websites hosted on one server, each sharing the computer resources, the server may struggle to provide high performance for each website. The websites may be slower and the server unable to handle a high number of visitors at the same time. It is for this reason only small websites with relatively few visitors would gain a benefit if using a shared server. It would not be recommended to have a very popular website, that is business critical (perhaps an ecommerce site) on a shared server with a very high number of websites.</p>
<p>The exception to this rule is if the shared server does not have that many websites on it. The dedicated server may be more than enough to handle say up to 50 websites of average usage.</p>
<p>Another disadvantage is the configuration of the servers are usually fixed. If a certain module is missing on the server that you need to run your website, it is unlikely the host will add it on for fear of affecting the other sites already on there.</p>
<p>Check with your web hosting provider if they provide a shared server and how many other websites are on it. You could be unknowingly suffering from a slower than expected website.</p>
<h3>Virtual Private Server (VPS)</h3>
<p>A Virtual Private Server (VPS) is when a server is divided into separate &ldquo;virtual&rdquo; machines, which are like mini-servers operating within their own environment, and with their own operating systems and resources. What this means is the VPS can be treated like an individual server, configured as you like, without impact on the other VPS&rsquo;s on the same server. With an allocated amount of resources you can feel safe knowing that other VPS websites will not impact on your resources as much as a shared environment. Only your websites on your VPS will impact on one another, and you have full control over them.</p>
<p>Typical costs for a VPS would range from &pound;20 per month with a budget hosting company to approx. &pound;100 per month with a good quality hosting company*.</p>
<p><em>Advantages</em></p>
<p>Fixed server resources can be allocated to your websites and isolated from other VPS websites so you have the confidence other high resource websites will not impact on yours.</p>
<p>Usually full server control (root access) can be provided and the servers configured how you need them so you are not restricted by only being able to use what the service provider installs.</p>
<p>VPS servers can be considered relatively low cost, or a sort of mid-way solution between shared and dedicated. Whereas shared may not be suitable, and dedicated may be too expensive, VPS can fill the gap providing what you need for the suitable price.</p>
<p><em>Disadvantages</em></p>
<p>VPS are not totally isolated from other VPS&rsquo;s. It is still possible your VPS may be affected by other high resource usage VPS&rsquo;s, although the impact is not as great as with shared hosting.</p>
<p>VPS&rsquo;s will not provide as much disk space or memory as a dedicated server. VPS&rsquo;s will be good for a low number of websites, but the more websites added to it will soon eat up any space and memory available.</p>
<p>VPS&rsquo;s would not be suitable for very high resource usage websites as the memory and CPU is not as much as dedicated servers.</p>
<p>Some server hosting providers may not provide a managed solution, or a limited managed solution, and so you would be responsible for the server management (at a software level). Mistakes can be made if you are not experienced.</p>
<h3>Dedicated Server</h3>
<p>A dedicated server is when you have an entire computer at your disposal to host your websites and any other web services, therefore completely isolating your websites from others on another machine.</p>
<p>Typical costs for a dedicated server would range from under &pound;100 per month with a budget hosting company to over &pound;600 per month with a good quality hosting company*.</p>
<p><em>Advantages</em></p>
<p>You have full control over the server to do as you please, install what you want and use as much resources as you want. For any bespoke or specialist website this would be the preferred option to remove any limitations in the system.</p>
<p>The server will have high resources at it&rsquo;s disposal. The full computer CPU, memory and disk space. If you have a high resource website then a dedicated server should be able to handle it.</p>
<p><em>Disadvantages</em></p>
<p>Dedicated servers are usually far more costly than shared or VPS servers, so it may be overkill and too costly to use a dedicated server for one, small, non commercial website.</p>
<p>The costs are not so much a factor in recent years, with many providers providing dedicated servers below &pound;100 per month. Although you must ensure the server and server provider are of good quality. You do get what you pay for when it comes to hosting.</p>
<h3>Cloud Hosting</h3>
<p>Cloud hosting is a new type of hosting service that allows you to only use and pay for what you need, rather than what you <em>could</em> use. It is an expandable, scalable, stretchable, whatever you want to call it service. Imaging having a small website that all of a sudden explodes with visitors and grows rapidly&hellip; there is no need to worry about getting a new server, the Cloud hosting service can just expand with it and take care of any resource change.</p>
<p><em>Advantages</em></p>
<p>Having your website in the &ldquo;cloud&rdquo; and not on any one physical potentially means you have more reliable service due to not having your one and only server go down. Spreading your server around the cloud ensures a single point of failure in one server is removed.</p>
<p>The pay per use plan could potentially be a welcome cost saving. You may want a dedicated server to cope with the high resources or space that you <strong>may</strong> need for your website(s), and initially could be a lot of wasted space. Yet you are paying the full server resources. With Cloud computing you only pay for what you use, so no wasted money on wasted server space.</p>
<p><em>Disadvantages</em></p>
<p>If you you have a variable usage website it is difficult to know what your costs will be as the costs may vary regularly. Worst case is your website becomes so resource intensive overnight your costs escalate beyond any budget.</p>
<p>Some people are worried about not knowing where their website is stored, and if there is a problem, then who is looking into <strong>your</strong> problem? It is likely to be a problem with the overall infrastructure and not with your server, so you may feel you are not getting any individual attention. With a dedicated server the problem is physically in front of an engineer who is working on it, but with a problem in the cloud it may not be quite as identifiable and fixable.</p>
<p class="h2">Additional Factors to Consider</p>
<ul>
<li><strong>Server Performance and Resources</strong> &ndash; servers range in performance depending on cost of the service provider</li>
<li><strong>Server Backup</strong> &ndash; make sure your server is backed up with easy restore whichever option you go for</li>
<li><strong>Uptime &amp; Downtime History</strong> &ndash; find out how reliable the servers have been in the past year, read reviews, speak to other customers</li>
<li><strong>Server Support</strong> &ndash; make sure the provider give good and fast support. There are a lot of budget companies out there that provide low quality support when you need it most</li>
<li><strong>Managed Hosting Service</strong> &ndash; find out to what level the provider managed the hosting solution, you don&rsquo;t want to be an inexperienced Linux server administrator</li>
<li><strong>Budget or Quality Hosting Provider</strong> &ndash; You get what you pay for with hosting, so decide upon your provider based upon the importance of your website. Don&rsquo;t make cut backs if it is a business critical website you have.</li>
</ul>
<p class="h2">More Information</p>
<p>See web hosting companies reviews&nbsp;<a href="http://firstsiteguide.com/hosting/" target="_blank" rel="noopener noreferrer">here</a></p>
<p>Other types of hosting and more detailed information can be found on Wikipedia at <a href="http://en.wikipedia.org/wiki/Web_hosting_service" title="http://en.wikipedia.org/wiki/Web_hosting_service">http://en.wikipedia.org/wiki/Web_hosting_service</a></p>`,
        date: '2010-08-06',
        category: 'Hosting'
    },
    {
        slug: 'choosing-the-right-type-of-website-design',
        title: 'Choosing the Right Type of Website Design',
        excerpt: 'Following on from my recent post on Static or Dynamic (Content Managed) Website - Which is Best? part 2 of my Choosing the Right Website Series focuses on the differences between various design options available for your website, the advantages and disadvantages of each one and the recommended choice. [More...]',
        content: `<p>Following on from my recent post on <a href="/blog/static-or-dynamic-content-managed-website-which-one-is-best/" target="_blank" rel="noopener noreferrer">Static or Dynamic (Content Managed) Website - Which is Best?</a> part 2 of my <strong>Choosing the Right Website Series</strong> focuses on the differences between various design options available for your website, the advantages and disadvantages of each one and the recommended choice.</p>
<p class="h2">Types of Website Designs</p>
<p>There are an infinite number of website designs possible and would be a mammoth task to discuss them in detail, so I am going to categorise the designs into three groups: <strong>Basic</strong>, <strong>Template</strong> and <strong>Bespoke</strong>.</p>
<p class="h2">Basic Design</p>
<p>&nbsp;The most basic of all design types would not require any graphic design and could be created by any person not experienced with web design principles. The basic design is generally a simple header image, left or right hand column for the menu, then the main content area. be no special imagery or buttons, just a simple colour scheme, company logo and header image. With only a couple of hours required to design this may be considered the lowest cost option and suitable for people on an extremely low budget that do not have a need to impress visitors.</p>
<h3>Advantages</h3>
<p><em>Quick Development </em><br /> The layout is the most common website layout and very standard so no time is required on that aspect. Choosing a few colours based on company logo would be straightforward, and inserting a basic header image would take no time at all. So creating this layout and design takes very little time.</p>
<p><em>Very Low Cost </em><br /> Due to the speed at which this layout and design can be thought up and implemented, the cost should be very low for a website of this design type.</p>
<p><em>Minimum Code </em><br /> The simple layout and design means the website code could potentially be quite minimal and optimised, although you will find websites of this nature do not tend to have optimisation in mind because the designers are not considering end user experience, only budget.</p>
<h3>Disadvantages</h3>
<p><em>Amateurish and Low Quality </em><br /> The low investment in this design type will show, and the website will look very amateurish. The visitor will make a direct link between the quality of your website and services and products offered.</p>
<p><em>Low user experience </em><br /> With only a simple menu in place and little thought on maximising user experience on the website, the user experience will be quite basic and not very impressive at all.</p>
<p><em>Portrays low quality products or services </em><br /> The basic image of the company and lack of user experience will give the user a perception of low quality product and services.</p>
<p><em>Unprofessional </em><br /> In business it is important to be professional and strive to provide high quality products and services all the time. The basic website will not show much professionalism, and break down any professionalism you have spent time offline, such as networking events, building up.</p>
<p><em>Negatively impact on a business </em><br /> All the above points will no doubt have a negative impact on the business, with visitors taking away the perception that your products and services are of lower quality than others in the same industry with very well designed websites.</p>
<p class="h2">Template Design</p>
<p>&nbsp;A Template Design is a design that is already pre-built by a graphic designer and available to purchase online. Various websites exist to sell templates, such as our own template scheme at <a href="http://www.web-designs-and-templates.co.uk./" target="_blank" rel="noopener noreferrer">http://www.web-designs-and-templates.co.uk.</a> The templates are low cost because the designer operates on the basis of multiple people buying the same template over and over again, thus generating a combined income for the designer. Templates are professional and often impressive considering the price, with a vast selection to choose from.</p>
<p>Templates are a good way for someone on a low budget to have a professional and graphically designed website. The main drawbacks are that other people may also be using your design and that the designs look too manufactured/off the shelf sometimes, which can provide a feeling of lower quality due to lower investment.</p>
<h3>Advantages</h3>
<p><em>Low Cost</em></p>
<p>The idea is the template website will sell many of the same designs, and using low cost, quick graphic designers, templates can be churned out quickly thus allowing a lower cost sale price for each one.</p>
<p><em>Graphic Designed</em></p>
<p>Graphic designers are used to create the designs, so they often look quite professional and visually impressive.</p>
<p><em>Large Selection Available</em></p>
<p>New designs are being added on a daily basis to the template websites, and because they have been around for along time, thousands of designs exist to choose from.</p>
<p><em>Quick Development</em></p>
<p>Using a template design means no graphic design time is required, the design is ready to use right away for your website.</p>
<h3><strong>Disadvantages</strong></h3>
<p><em>Other websites may have the same design</em></p>
<p>Templates can be purchased outright for a hug fee, but usually people buy the low cost template which leaves it open for others to purchase the same design over and over again. This is how the designer will make a profit from the time spent on this design. This means others may have the same design as you, even your competitor down the road! Although the chances are very slim. You therefore lose any unique online presence and more importantly your brand image.</p>
<p><em>It looks "manufactured"</em></p>
<p>Templates can often be identified as templates and not bespoke designs. This may be due to out of place logos (see below) or just a "too cosmetic" design that would not represent your company image at all. If it looks like a template it can portray a lower quality due to lower cost feel.</p>
<p><em>No thought of company brand or image in mind</em></p>
<p>The template would have been designed by a designer not knowing anything about your brand or business and would like it to be as generic as possible in order to sell more designs. Therefore once your own logo, header and colours are inserted the website design may become disjointed from your company brand, and could look like you have just dropped your logo in there without the website being designed based on it and look out of place. This may then also provide a feeling of lower quality products or services.&nbsp;</p>
<p><em>Over Bloated Coding</em></p>
<p>Quite often the code to build the template which you may end up using is over-bloated with too much, unnecessary code used, and packed with unnecessary features like animations, JavaScript effects and too much imagery. This is likely due to wanting a fast design and development time by the developer due to the low cost of sales. The unnecessary code usually means the site is not designed with a SEO or page speed in mind, and is not streamlined. The site may therefore take longer to load than a bespoke designed site and potentially not conform to web standards.</p>
<p><em>You do not own the IPR</em></p>
<p>The designer, or more likely the website selling the designs, will likely own the IPR for the design so can re-sell it. You will only be licensed to use it so cannot then sell on the design or images, and may have limitations on how you use the template purchased.</p>
<p class="h2">Bespoke Designs</p>
<p>&nbsp;A bespoke design is considered the Rolls Royce of designs and if designed right will portray the highest standard of professionalism and quality of your business. Visitors will perceive a high standard and quality of your products and services, and ultimately be more likely to do business with you than a company with a basic or template driven website. The cost for bespoke is of course higher, but the idea is you would have a return on the investment in the long term from increased business due to a high standard website.</p>
<h3>Advantages</h3>
<p>If a suitable and experienced web graphic designer is used, your website design should have the following advantages:-</p>
<p><em>Unique to your website</em></p>
<p>The design will not exist and is created from scratch thus ensuring no other website exists with the same design as yours. This ensures your online brand identity is <strong>only your</strong> brand identity which will strengthen it.</p>
<p><em>Designed for your brand and company in mind</em></p>
<p>The design will be created specifically with your business products and services in mind. If you do not have a logo, a logo and website will be designed as a brand image rather two separate entities. If you already have a logo the design can be seamlessly integrated into your brand image ensuring the design is strong as a whole and not disjointed. The design and colours will represent your products and services online.</p>
<p><em>Designed for optimised user experience and content</em></p>
<p>The layout and design will be considered based on the objective of the website and users visiting. The menu positioning and hierarchy, images, content positions and other functionality will be carefully considered and planned to ensure the user finds and understands the information they want quickly whilst having a pleasurable experience on the website.</p>
<p><em>Portrays a high standard of products and services for your business</em></p>
<p>The design will portray the high standard of service and products your company provide which is extremely important.</p>
<p><em>You should own the IPR (make sure this is agreed with designer)</em></p>
<p>In agreement with the graphic designer you should own the IPR to the design and possibly images (depending on where they were sourced) to be used as you would like. Check the terms and conditions with your designer to make sure IPR is covered and agreed to be with you.</p>
<h3>Disadvantages</h3>
<p>A bespoke design does come with it's disadvantages though:-</p>
<p><em>High Cost</em></p>
<p>The additional time for planning and design will of course need to paid for. The time taken for this would exceed the template and basic options and therefore cost could be dramatically higher than the other options.</p>
<p><em>Longer development time</em></p>
<p>There will also be additional time spent to plan and design the website so development time will also take longer.</p>
<p class="h2">Which Design is Best?</p>
<p>As with most choices to make it all depends on your budget, but if budget is not a factor then the <strong>bespoke design</strong> option would be far better choice for any website and is the recommended option to take. With the personal service a graphic designer can provide, the website's unique and professional online presence, your brand image strengthened and perception of high quality products and services, bespoke design is a clear winner. Your website visitors will be far more impressed and know your products and services will be of higher quality which should ultimately lead to more business.</p>
<p>But if the added cost of bespoke just really is not an option, then a <strong>template design</strong> should be the next choice so you can still portray a higher standard of website compared to basic.</p>
<p>I think the <strong>basic design</strong> should only be used by amateur and self learning web designers who want to create their own website for no cost and are just starting out with the basics. In this case the website subject would be of a personal nature such as a club or hobby, and not a business website at all.</p>`,
        date: '2010-07-30',
        category: 'Design/Development'
    },
    {
        slug: 'static-or-dynamic-content-managed-website-which-one-is-best',
        title: 'Static or Dynamic (Content Managed) Website – Which One is Best',
        excerpt: 'Dynamic websites with feature rich content management systems have been around for many, many years now, and offer a lot more features and flexibility compared to static websites, yet so many websites are still being developed as a static site over a content managed (dynamic) website.',
        content: `<p>Dynamic websites with feature rich content management systems have been around for many, many years now, and offer a lot more features and flexibility compared to static websites, yet so many websites are still being developed as a static site over a content managed (dynamic) website.</p>
<p>This blog will explain what both static and dynamic websites are, their advantages and disadvantages, which one is best in my opinion, and hopefully help you gain a better understanding so you can choose the right one for you.</p>
<p>&nbsp;</p>
<p class="h2">Static Websites</p>
<p>A static website means that every single page on your website is stored on the server as a separate file containing the HTML code to display that page. This means if you have 100 pages on your website, there will be 100 .html files on the server containing the necessary HTML code and content.</p>
<h3>Advantages of Static Websites</h3>
<p><strong>No advanced programming skills required</strong><br /> Most dynamic websites require advanced programming skills in languages such as PHP or ASP, and database administration knowledge with SQL. These &ldquo;server side scripting&rdquo; languages are the decision makers, what content to read and write to the database and the database communication scripts themselves.</p>
<p>A static website has no use of this therefore no advanced programming is required. Static websites are built using HTML and CSS code, so it does help to have a basic understanding of these, but with so many website building software like Dreamweaver on the market, it is possible to manage websites without knowing HTML and CSS at all.</p>
<p><strong>No special web hosting server</strong><br /> In order for the dynamic scripts and database to work in dynamic websites, a special (but very common) server is required to process it. With static HTML website there is no need. Only a browser like Firefox, Safari, Chrome or Internet Explorer is required to run a static web page.</p>
<p><strong>Faster Loading Times</strong><br /> The static file will be served to the user with no additional processing, but as is straight from the file system. With no database interaction speeds can be faster and server resources lower if a static website is used. Although this can be overcome in many content management systems that support &ldquo;caching&rdquo; of the content, in which they make a static page of a dynamic page to speed it up. See below for more info.</p>
<p>So in summary, the advantages of a static website are:-</p>
<ul>
<li>No advanced programming skills required</li>
<li>No special web hosting server</li>
<li>Fast loading times (although some dynamic website are the same)</li>
</ul>
<h3>Disadvantages of Static Websites</h3>
<p><strong>Difficult to Update and maintain</strong><br /> The problem with static websites becomes apparent when you want to update something that appears on every page, such as a Menu link, or change the website layout and design. Every page that contains the change has to be edited, and with a very large website this can be quite time consuming and costly.</p>
<p>Another disadvantage of this is the content on your website will all be mixed with HTML, so if you are not familiar with HTML, then editing this content yourself in a text editor is likely to be difficult or not even possible. Therefore changing perhaps one email address on page will be quite difficult by the website owner and so a web developer would need to be used which would cost money and also potentially take time to change.</p>
<p><strong>Little or no functionality</strong><br /> With no server side scripting or dynamic functionality the page is very static. It does not do anything. It does not change depending on my interaction or choices I make. Therefore it is difficult, if at all possible, to utilise any form of popular functionality like shopping carts, social networking, forums and so much more. The page is only good to display the same, static content over again, so suitable only for a &ldquo;brochure&rdquo; website.</p>
<p>So in summary, the disadvantages of static websites are:-</p>
<ul>
<li>Difficult to update and maintain</li>
<li>Costly to update and maintain</li>
<li>Provide no functionality like shopping carts, social networking or forums</li>
</ul>
<h3>More Information about Static Websites</h3>
<p><a href="http://en.wikipedia.org/wiki/Static_web_page">http://en.wikipedia.org/wiki/Static_web_page</a></p>
<p class="h2">Content Managed Websites (CMS)</p>
<p>A content managed system (CMS) is when the layout and design for the website, created in files (like static sites), are separated from the content, which is stored in a database. This allows the server to use the same layout files over and over again for all pages on the website, but feed different content from the database to the user, depending on the pages they visit, or the choices they make. The design and layout files can be created in as little as 1 or 2 files in some cases.</p>
<h3>Advantages of Content Managed (Dynamic Websites)</h3>
<p>The layout and content separation with server side scripting to make decision, opens up a lot of possibilities and advantages for content managed and dynamic websites.</p>
<p><strong>Design and Layout defined in few files</strong><br /> This means if you have a very large site and need a menu item changed, or layout changed, you only change it one (or very few) files and the whole website is updated.</p>
<p><strong>Content separated from design</strong><br /> This also allows for only a few layout and design files to be used because the content is inserted dynamically into this file depending on the page you are on.</p>
<p><strong>User friendly administration</strong><br /> The CMS will provider an administration area where the website owner can modify various settings and content associated with the website.</p>
<p><strong>A WYSIWYG Editor</strong> (<strong>W</strong>hat <strong>Y</strong>ou <strong>S</strong>ee <strong>I</strong>s <strong>W</strong>hat <strong>Y</strong>ou <strong>G</strong>et)<br /> This refers to an editor area with buttons to format the content and insert images, tables, hyperlinks and more. Taking a similar look to the familiar Microsoft Word, people will feel at ease formatting their content using this editor.</p>
<p><strong>Added Functionality</strong><br /> Many common CMS&rsquo;s will have built in or add-ons available to add additional functionality to the website like a shopping cart, forums, business directory, and a lot more, which would be difficult to provide in a static website.</p>
<p><strong>Search Engine Optimisation</strong><br /> Most common CMS&rsquo;s would also the website owner access to important search engine optimisation aspects of the website like page titles and META tags like Keywords and description.</p>
<p><strong>Fast Page Load Speeds (for some CMS&rsquo;s)</strong><br /> Many Content Managers and Dynamic sites now have the ability to create &ldquo;Cached&rdquo; pages from the dynamic page. What this means is a .html page is actually created on the server from the dynamic content, and the server feeds this instead, thus simulating a static page. Cached pages can then be regenerated every so often to maintain a dynamic aspect and change content.</p>
<p>So in summary, the advantages of a Content Managed and Dynamic Website are:-</p>
<ul>
<li>Design and Layout defined in 1 file</li>
<li>Content separated from design</li>
<li>User friendly administration</li>
<li>A WYSIWYG Editor (What You See Is What You Get)</li>
<li>Added Functionality</li>
<li>Search Engine Optimisation</li>
<li>Same Speed As Static</li>
</ul>
<h3>Disadvantages of Content Managed (Dynamic Websites)</h3>
<p>Of course, with anything there will be disadvantages.</p>
<p><strong>Advanced coding and specialist knowledge required</strong><br /> Although many open source content mangers are freely available to download and install on a server, there will still be necessary programming and database knowledge required. The database has to be created, files uploaded to the server, installation process to follow, and then possible customisation afterwards (for a truly bespoke look and feel). So usually a web developer is required to build the site which would cost, although it likely the a developer is needed to build a static one too, so no difference there. An online system could be used, perhaps your hosting company provide one, but they will not be customisable and have a lot of limitations.</p>
<p><strong>Increased Learning Curve</strong><br /> The developer would have to learn how to install, configure, customise and use the content management system, and possibly the coding and database knowledge, but hopefully after a few uses this should be overcome.</p>
<p><strong>Increased Cost? </strong><br /> Some people may claim they cost more, but read on to find out why they should not.</p>
<p><strong>Slower than Static?</strong><br /> Some people may claim they would be slower than static websites, but as stated above, using content managers that cache pages would be just the same speed.</p>
<p>So in summary, the disadvantages of a Content Managed and Dynamic Website are:-</p>
<ul>
<li>Advanced coding and specialist knowledge required</li>
<li>Increased Learning Curve (first few times only)</li>
<li>Possible Increased Cost (but should not as explained below)</li>
<li>Possible Slower than Static (unless using a CMS that supports cache)</li>
</ul>
<h3>More Information About Dynamic Websites</h3>
<p><a href="http://en.wikipedia.org/wiki/Dynamic_web_page" title="http://en.wikipedia.org/wiki/Dynamic_web_page">http://en.wikipedia.org/wiki/Dynamic_web_page</a></p>
<p class="h2">So Which is Best, Static or Dynamic?</p>
<p><strong>In my opinion static websites should not be developed anymore because of the disadvantages for maintaining and updating and with little functionality or user interaction.</strong></p>
<p>Technology has moved on dramatically since static websites were considered the norm and there is no reason to use them anymore. Having a static website is likely to cause problems updating and maintaining the site.</p>
<p><strong>In my opinion it is by far better to have a dynamic, content managed website.</strong></p>
<p class="h2">But Don&rsquo;t Content Managed Websites Cost More?</p>
<p>Many web design and development companies charge more for content management systems, possibly stating it would take longer to develop. <strong>This is just not true</strong>! If the development does take longer than expected, then it is because either the developer is <strong>not familiar</strong> with the content management system, or they have a <strong>badly designed</strong> content management system.</p>
<p>The time taken to provide a content management system, by an experienced company familiar with a good quality CMS should be less than if they developed it using a static website.</p>
<p>There may be other possible reasons why it would cost more, it may be the CMS:-</p>
<ul>
<li>is licensed from another company and costs are passed on</li>
<li>is developed in-house and development costs need to be recouped</li>
<li>is perceived as an added value service so is charged at a greater price</li>
</ul>
<p>There is no arguing the third point, the value to a customer of a content management system is far greater than a static website, but with so many feature rich open source systems of very high standard that do not have license costs, the first two points should be dismissed.</p>
<p class="h2">So What Next?</p>
<p>There are a lot of content management systems available so I will not be listing them here and will assume you will choose a web developer to build your website. There are also a lot of criteria involved in choosing a web developer, but here are a few important points to consider&nbsp; in relation to the content manager they provide. Make sure they can:</p>
<ul>
<li>Provide a dynamic, content managed website</li>
<li>Can develop it to the standard and speed you expect</li>
<li>Charge a similar price to the equivalent static website (or justify why it costs a lot more)</li>
<li>Are experienced in server side scripting and database programming for efficient development, maintenance and updates.</li>
<li>Use an efficient content manager that supports cache so speed will be the same as a static website</li>
</ul>`,
        date: '2010-07-23',
        category: 'CMS'
    },
    {
        slug: 'replace-special-characters-with-html-codes-in-php',
        title: 'Replace Special Characters with HTML Codes in PHP',
        excerpt: 'I always struggle to properly convert special characters into HTML when adding to a web page or importing into a database… the foreign characters with accents like Umlauts etc. Although PHP has a few functions that claim to do it (e.g. htmlentities() ) , it does not work for all characters I have, just some of them. So I have written a script to do a find and replace on the characters without using PHP built in functions.',
        content: `<p>
	I always struggle to properly convert special characters into HTML when adding to a web page or importing into a database&hellip; the foreign characters with accents like Umlauts etc.<br />
	Although PHP has a few functions that claim to do it (e.g. htmlentities() ) , it does not work for all characters I have, just some of them.<br />
	So I have written a script to do a find and replace on the characters without using PHP built in functions. This allows me to fine control what characters are converted. If I have missed any I can just add them to the list. It would be great to find a complete list of all characters possible so I don&rsquo;t have to check content all the time for any not included.</p>
<pre class="brush:php;">
$entities = array(&#10;    &rsquo;&Agrave;&rsquo;=&gt;&rsquo;&amp;Agrave;&rsquo;,&#10;    &rsquo;&agrave;&rsquo;=&gt;&rsquo;&amp;agrave;&rsquo;,&#10;    &rsquo;&Aacute;&rsquo;=&gt;&rsquo;&amp;Aacute;&rsquo;,&#10;    &rsquo;&aacute;&rsquo;=&gt;&rsquo;&amp;aacute;&rsquo;,&#10;    &rsquo;&Acirc;&rsquo;=&gt;&rsquo;&amp;Acirc;&rsquo;,&#10;    &rsquo;&acirc;&rsquo;=&gt;&rsquo;&amp;acirc;&rsquo;,&#10;    &rsquo;&Atilde;&rsquo;=&gt;&rsquo;&amp;Atilde;&rsquo;,&#10;    &rsquo;&atilde;&rsquo;=&gt;&rsquo;&amp;atilde;&rsquo;,&#10;    &rsquo;&Auml;&rsquo;=&gt;&rsquo;&amp;Auml;&rsquo;,&#10;    &rsquo;&auml;&rsquo;=&gt;&rsquo;&amp;auml;&rsquo;,&#10;    &rsquo;&Aring;&rsquo;=&gt;&rsquo;&amp;Aring;&rsquo;,&#10;    &rsquo;&aring;&rsquo;=&gt;&rsquo;&amp;aring;&rsquo;,&#10;    &rsquo;&AElig;&rsquo;=&gt;&rsquo;&amp;AElig;&rsquo;,&#10;    &rsquo;&aelig;&rsquo;=&gt;&rsquo;&amp;aelig;&rsquo;,&#10;    &rsquo;&Ccedil;&rsquo;=&gt;&rsquo;&amp;Ccedil;&rsquo;,&#10;    &rsquo;&ccedil;&rsquo;=&gt;&rsquo;&amp;ccedil;&rsquo;,&#10;    &rsquo;?&rsquo;=&gt;&rsquo;&amp;ETH;&rsquo;,&#10;    &rsquo;?&rsquo;=&gt;&rsquo;&amp;eth;&rsquo;,&#10;    &rsquo;&Egrave;&rsquo;=&gt;&rsquo;&amp;Egrave;&rsquo;,&#10;    &rsquo;&egrave;&rsquo;=&gt;&rsquo;&amp;egrave;&rsquo;,&#10;    &rsquo;&Eacute;&rsquo;=&gt;&rsquo;&amp;Eacute;&rsquo;,&#10;    &rsquo;&eacute;&rsquo;=&gt;&rsquo;&amp;eacute;&rsquo;,&#10;    &rsquo;&Ecirc;&rsquo;=&gt;&rsquo;&amp;Ecirc;&rsquo;,&#10;    &rsquo;&ecirc;&rsquo;=&gt;&rsquo;&amp;ecirc;&rsquo;,&#10;    &rsquo;&Euml;&rsquo;=&gt;&rsquo;&amp;Euml;&rsquo;,&#10;    &rsquo;&euml;&rsquo;=&gt;&rsquo;&amp;euml;&rsquo;,&#10;    &rsquo;&Igrave;&rsquo;=&gt;&rsquo;&amp;Igrave;&rsquo;,&#10;    &rsquo;&igrave;&rsquo;=&gt;&rsquo;&amp;igrave;&rsquo;,&#10;    &rsquo;&Iacute;&rsquo;=&gt;&rsquo;&amp;Iacute;&rsquo;,&#10;    &rsquo;&iacute;&rsquo;=&gt;&rsquo;&amp;iacute;&rsquo;,&#10;    &rsquo;&Icirc;&rsquo;=&gt;&rsquo;&amp;Icirc;&rsquo;,&#10;    &rsquo;&icirc;&rsquo;=&gt;&rsquo;&amp;icirc;&rsquo;,&#10;    &rsquo;&Iuml;&rsquo;=&gt;&rsquo;&amp;Iuml;&rsquo;,&#10;    &rsquo;&iuml;&rsquo;=&gt;&rsquo;&amp;iuml;&rsquo;,&#10;    &rsquo;&Ntilde;&rsquo;=&gt;&rsquo;&amp;Ntilde;&rsquo;,&#10;    &rsquo;&ntilde;&rsquo;=&gt;&rsquo;&amp;ntilde;&rsquo;,&#10;    &rsquo;&Ograve;&rsquo;=&gt;&rsquo;&amp;Ograve;&rsquo;,&#10;    &rsquo;&ograve;&rsquo;=&gt;&rsquo;&amp;ograve;&rsquo;,&#10;    &rsquo;&Oacute;&rsquo;=&gt;&rsquo;&amp;Oacute;&rsquo;,&#10;    &rsquo;&oacute;&rsquo;=&gt;&rsquo;&amp;oacute;&rsquo;,&#10;    &rsquo;&Ocirc;&rsquo;=&gt;&rsquo;&amp;Ocirc;&rsquo;,&#10;    &rsquo;&ocirc;&rsquo;=&gt;&rsquo;&amp;ocirc;&rsquo;,&#10;    &rsquo;&Otilde;&rsquo;=&gt;&rsquo;&amp;Otilde;&rsquo;,&#10;    &rsquo;&otilde;&rsquo;=&gt;&rsquo;&amp;otilde;&rsquo;,&#10;    &rsquo;&Ouml;&rsquo;=&gt;&rsquo;&amp;Ouml;&rsquo;,&#10;    &rsquo;&ouml;&rsquo;=&gt;&rsquo;&amp;ouml;&rsquo;,&#10;    &rsquo;&Oslash;&rsquo;=&gt;&rsquo;&amp;Oslash;&rsquo;,&#10;    &rsquo;&oslash;&rsquo;=&gt;&rsquo;&amp;oslash;&rsquo;,&#10;    &rsquo;&OElig;&rsquo;=&gt;&rsquo;&amp;OElig;&rsquo;,&#10;    &rsquo;&oelig;&rsquo;=&gt;&rsquo;&amp;oelig;&rsquo;,&#10;    &rsquo;&szlig;&rsquo;=&gt;&rsquo;&amp;szlig;&rsquo;,&#10;    &rsquo;?&rsquo;=&gt;&rsquo;&amp;THORN;&rsquo;,&#10;    &rsquo;?&rsquo;=&gt;&rsquo;&amp;thorn;&rsquo;,&#10;    &rsquo;&Ugrave;&rsquo;=&gt;&rsquo;&amp;Ugrave;&rsquo;,&#10;    &rsquo;&ugrave;&rsquo;=&gt;&rsquo;&amp;ugrave;&rsquo;,&#10;    &rsquo;&Uacute;&rsquo;=&gt;&rsquo;&amp;Uacute;&rsquo;,&#10;    &rsquo;&uacute;&rsquo;=&gt;&rsquo;&amp;uacute;&rsquo;,&#10;    &rsquo;&Ucirc;&rsquo;=&gt;&rsquo;&amp;Ucirc;&rsquo;,&#10;    &rsquo;&ucirc;&rsquo;=&gt;&rsquo;&amp;ucirc;&rsquo;,&#10;    &rsquo;&Uuml;&rsquo;=&gt;&rsquo;&amp;Uuml;&rsquo;,&#10;    &rsquo;&uuml;&rsquo;=&gt;&rsquo;&amp;uuml;&rsquo;,&#10;    &rsquo;?&rsquo;=&gt;&rsquo;&amp;Yacute;&rsquo;,&#10;    &rsquo;?&rsquo;=&gt;&rsquo;&amp;yacute;&rsquo;,&#10;    &rsquo;&Yuml;&rsquo;=&gt;&rsquo;&amp;Yuml;&rsquo;,&#10;    &rsquo;&yuml;&rsquo;=&gt;&rsquo;&amp;yuml;&rsquo;&#10;);&#10;foreach ($entities as $key =&gt; $value)&#10;&#123;&#10;    $ent[] = $key;&#10;    $html_ent[] = $value;&#10;&#125;&#10;$new_string = str_replace( $ent, $html_ent, $string );</pre>`,
        date: '2010-07-14',
        category: 'Technical'
    },
    {
        slug: 'affinity-web-solutions-ltd-changes-name-to-amity-web-solutions-ltd',
        title: 'Affinity Web Solutions Ltd Changes Name to Amity Web Solutions Ltd',
        excerpt: 'The move was primarily to avoid confusion with another similar sounding company and ensure we continue to stand out from competition. It also gave us an opportunity to re-brand the website and logo with a new and improved image (although we released the design some weeks ago).',
        content: `<p>We have changed company name today to <strong>Amity Web Solutions Ltd</strong>.<br /><br />The move was primarily to avoid confusion with another similar sounding company and ensure we continue to stand out from competition. It also gave us an opportunity to re-brand the website and logo with a new and improved image (although we released the design some weeks ago).<br /><br /> We have taken this opportunity even further to provide an even better service to all our customers. Not only do our websites include:</p>
<ul>
<li>A leading <strong>Content Manager System</strong> to edit your own content</li>
<li>Fundamental and necessary <strong>Search Engine Optimisation</strong> to ensure optimised rankings</li>
<li><strong>Bespoke, unique and high quality design</strong> for your business to stand out from the competition and portray your high standard of products and services</li>
</ul>
<p>but can now include the following to ensure your website is to the highest standard in not only design but functionality and quality of build:-</p>
<ul>
<li>W3C Web Standards Compliancy</li>
<li>W3C Accessible Website (Legal Requirement)</li>
<li>Page Download Speed Optimisation</li>
<li><strong>NEW:</strong> "Website Health Check" Checklist (ensures all recommended points are delivered and the site is to the highest standard)</li>
</ul>
<p>With all the above requirements provided, your website will truly be of the highest standards possible ensuring your website is not only found but to maximise website enquiries. <br /><br />With these requirements met <strong>Amity Web Solutions</strong> maintains it's high reputation and standard of websites in and around the Caerphilly and South Wales area.</p>`,
        date: '2010-07-09',
        category: 'Amity News'
    },
    {
        slug: 'gmail-tip-how-to-stop-checking-email-all-the-time',
        title: 'Gmail Tip: How To Stop Checking Email All The Time',
        excerpt: 'I just wanted to quickly share a good GMail setup I am trialling to help me stop checking email all the time which can be very counter productive (this is a follow up to my Blog asking what the best email client is for GTD which I have come to the conclusion does not exist!). This little tip could be used for any email client which instantly checks and notifies you of new email. Windows clients like Outlook should have a control to stop checking email so you wont need this.',
        content: `<p>I just wanted to quickly share a good GMail setup I am trialling to help me <strong>stop checking email all the time</strong> which can be very counter productive (this is a follow up to my Blog asking <a href="/blog/whats-the-best-email-client-for-getting-things-done-gtd/">what the best email client is for GTD</a> which I have come to the conclusion does not exist!). This little tip could be used for any email client which instantly checks and notifies you of new email. Windows clients like Outlook should have a control to stop checking email so you wont need this.</p>
<p>As part of my continuous productivity improvement I realised using GMail is counter productive. I am "in" Gmail nearly all the time as this is where customer projects and tasks information is located and I need to refer to it, but GMail would instantly show me a new email has arrived in the Inbox and human curiosity (which I cannot stop hence this solution!) made me checkout the email to which I would sometimes reply or action. If I have many emails then as I am "in" Gmail and replying, new ones would come in, maybe replies to the emails I just sent, and before you know it it&rsquo;s home time! So I needed to stop being notified, and <strong>check email only when I am ready</strong>, not when GMail wants me to!</p>
<p class="h2">How Do I Stop Checking Email All The Time</p>
<p>The way to do this in GMail (and other similar clients) is to create a new Inbox into which I put emails and mark them as Read, so I cannot see there are unread emails in there.</p>
<h3>Create New Inbox</h3>
<p>Under Settings &ndash;&gt; Labels we need to create our new Inbox. I call it quite simply "My Inbox".</p>
<p><em><strong>Note</strong>: I have also created additional Inboxes called "To Process" and "Other". You do not need to but it helps with my GTD setup. When processing emails in My Inbox, any that need further action other than Reply, Delete or Archive, I move to To Process. My Other label is to put any non-customer related emails in there based on some filters I have setup.</em></p>
<h3>Create Filter</h3>
<p>We need to create a filter to put any emails that come into your Inbox into your new Inbox, and mark them as Read.</p>
<ol>
<li>Under Settings -&gt; Filters, Create a new Filter</li>
<li>Enter <strong>in:inbox </strong>into the Has Words section</li>
<li>Click Next Step</li>
<li>On the next page click "Skip Inbox", "Mark as Read" and "Apply the Label: (your new label)".</li>
<li>Click Create Filter</li>
</ol>
<p><strong>Note</strong>: You may get the following warning stating it is not recommended, but it works! So click OK to proceed. Just make sure this filter<strong> is always the last filter in your list</strong> else it may not work<strong>. </strong></p>`,
        date: '2010-06-02',
        category: 'Emails'
    },
    {
        slug: 'speed-up-your-website-by-using-cache',
        title: 'Speed Up Your Website By Using Cache',
        excerpt: 'I recently finished a database intensive website using the Joomla content management system, and upon release the website popularity and therefore high database queries put quite a strain on the site which slowed it down more than usual. I try to develop websites to load as fast as possible, and with Google\'s new "caffeine" release taking website speed into account it is all the more important. In a situation like this one solution is to use website caching. Any database driven website (e.g. content managed), large or small, will benefit from using caching.',
        content: `I recently finished a database intensive website using the Joomla content management system, and upon release the website popularity and therefore high database queries put quite a strain on the site which slowed it down more than usual. I try to develop websites to load as fast as possible, and with Google's new "caffeine" release taking website speed into account it is all the more important.

In a situation like this one solution is to use <strong>website caching</strong>. Any database driven website (e.g. content managed), large or small, will benefit from using caching.
<p class="h2">What is Caching?</p>
Caching is when dynamic, database driven pages, such as those from a content managed website, are created as static HTML files on the server rather than pulled from the database every time someone requests a page. This means the page load times are much faster as no database queries or other script processing is performed.

Take a look at this monitoring report for a website before and after enabling cache. As you can see there is a dramatic improvement in page load speed (the vertical axis is page load times, the horizontal is time of day). A reduction from approx. 3 seconds to 0.2 seconds from within the UK.

<img class="alignnone size-full wp-image-1418" src="https://www.amityweb.co.uk/wp-content/uploads/2022/01/cache.png" alt="" width="616" height="215" />

&nbsp;
<p class="h2">How Do I Enable Cache?</p>
If you have a static website (plain HTML files, no content manager), then you do not need to do anything, cache is not required.

If you use a content management system, then cache is dependent upon your content management system, so speak to your web developer to ask them if such a cache system exists in your content manager.

If you use the <a href="/blog/the-benefits-of-using-the-joomla-content-management-system/">Joomla content management system</a> you will be pleased to know cache is built in and easily enabled.
<ul>
 	<li>Go to Extensions -&gt; Plugins -&gt; System Cache</li>
 	<li>Select the Yes radio button for Enabled</li>
 	<li>Enter the Cache lifetime (see below for explanation)</li>
 	<li>Click Save</li>
</ul>
That's it!
<p class="h2">What is Cache Lifetime?</p>
Cache Lifetime is the time spent before the site performs a database query again and recreates the cached pages from the content. So any changes made will be shown after the lifetime expires. For a site that has infrequent content updates set the lifetime to a high number such as 24 hours or even 1 week (it's in seconds), but if your site has regular content added or changed, then set it to a lower number, a number you are happy to wait before it re-generates, such as 1 hour or 15 minutes. If you have a busy site even 5 minutes will save a lot of database queries.
<p class="h2">Resetting the Cache</p>
Now your website pages will be saved on the server as HTML files rather than querying the database every time. This does have one drawback though, and that’s when you make a change in the editor, you will not see the change immediately on the site because it is showing a saved HTML page of before your change. You can either wait for the cache lifetime to expire and re-generate, or go to <strong>Tools -&gt; Clean Cache</strong> and delete all the cached items to regenerate again. Then you will see your changes.
<p class="h2">Beware of SEF</p>
If you use a SEF component such as sh404SEF to make your URLs search engine friendly, make sure the SEF plugin is before the cache plugin else you may have problems with links.
<p class="h2">Beware of Permissions</p>
 It's possible you may have permissions issues which may disallow Joomla from deleting the cached files, especially if your FTP user owns all the files and not the server. If you have an failed to delete files error then you can enable FTP in the Joomla configuration so all file changes by Joomla will be performed by using the FTP user which may overcome file permissions issues.

You can do this by going to Site -&gt; Global Configuration -&gt; Server, and for FTP Settings choose Enable FTP Yes and enter the FTP details in the box. Click Save to save these details and you should be able to delete the Cached files.

<strong>Note</strong>: You <strong>should</strong> have the configuration.php file un-writeable for security, so you may also need to set this file to writeable using FTP first, save the above changes, then set the file back to un-writeable.`,
        date: '2010-06-01',
        category: 'Design/Development'
    },
    {
        slug: 'website-grants-available-for-heads-of-the-valleys-businesses',
        title: 'Website Grants Available for Heads of the Valleys Businesses',
        excerpt: 'Grants of up to 50% of eligible project costs to a maximum of £2,000 are available to the Heads of the Valleys businesses.',
        content: `<p>
	Grants of up to 50% of eligible project costs to a maximum of &pound;2,000 are available to the Heads of the Valleys businesses.<br />
	Grants are available to:-</p>
<ul>
	<li>
		Residents of the Heads of the Valleys setting up full time businesses (normally for the first time or after an absence from self employment)</li>
	<li>
		Persons or enterprises located outside the Heads of the Valleys that are setting up or relocating full time businesses within the Heads of the Valleys area</li>
	<li>
		Existing businesses within the Heads of the Valleys undertaking new capital investment</li>
</ul>
<p>
	Generally businesses and start-ups in all business sectors may be considered (excluding retail).<br />
	<br />
	There are grants available for <a href="/blog/grant-funding-availability-in-caerphilly-for-websites-and-shopping-carts/">Caerphilly</a> and <a href="/blog/grant-funding-available-in-merthyr-tydfil-for-websites-and-shopping-carts/">Merthyr</a> and other areas of South Wales.<br />
	<br />
	<a href="/contact-us/">Contact Us</a> for more information.</p>`,
        date: '2010-05-31',
        category: 'Amity News'
    },
    {
        slug: 'speed-up-blog-posts-use-windows-software-to-post-to-your-blog',
        title: 'Speed Up Blog Posts – Use Windows Software to Post to Your Blog',
        excerpt: 'I am always trying to find ways to streamline and speed up my work activities. Blogging using WordPress is something that I find a little tedious, especially if I have images to add. Going through the image uploading and inserting process is counterproductive.',
        content: `<p>I am always trying to find ways to streamline and speed up my work activities. Blogging using WordPress is something that I find a little tedious, especially if I have images to add. Going through the image uploading and inserting process is counterproductive.</p>
<p>So I was quite excited when I discovered Windows software you can install on your PC to write your blog in, then upload the blog to WordPress (or other blogs) including images.</p>
<p>I am first trialling Live Writer (just because Microsoft do make pretty applications that work). With all the text and image formatting I can control I think I may be converted. I also use Evernote as my note taking application for blog ideas, so now I can copy and paste my notes, including images (perhaps using Evernotes screen clipping tools), from Evernote into Windows Live Writer (or other blog clients) which then submits the post to WordPress. This should speed up my blogging process quite a bit. This is my first attempt, so let&rsquo;s see how it goes.</p>
<p>Other blog clients are listed on the WordPress site here: <br /><a href="http://codex.wordpress.org/Weblog_Client" title="http://codex.wordpress.org/Weblog_Client">http://codex.wordpress.org/Weblog_Client</a></p>
<p>Other blog systems can also be posted to from the software, not just WordPress.</p>
<p class="h2">Advantages</p>
<p>The above WordPress page lists the following advantages:-</p>
<ul>
<li>The ability to write posts without having to go on-line</li>
<li>The ability to save drafts</li>
<li>A nicer interface</li>
<li>Fancy formatting features</li>
<li>Features like cross-posting to multiple blogs</li>
<li>Faster uploading and addition of photos</li>
<li>The ability to keep local backup</li>
</ul>
<p class="h2">Disadvantage</p>
<p>At the moment the only thing I am missing is either the Windows clients having more of a note taking feature to them, including screen clipping tool so I can abandon Evernote, or I wish Evernote could export to WordPress. In the meantime we have to use two applications for this process.</p>`,
        date: '2010-05-29',
        category: 'CMS'
    },
    {
        slug: 'new-website-released-for-amity-web-solutions',
        title: 'New Website Released for Amity Web Solutions',
        excerpt: 'We\'ve released a new website today to replace what we considered an old and outdated design. Our old site was not actually that old, nearly 2 years, but in web years that must be getting on quite a bit! Having a new website every year or two, or at least a major revamp, is always a good idea to ensure your business on the web keeps up with the times and utilises the latest technology, search engine recommendations and user experience and expectation changes.',
        content: `<p>We've released a new website today to replace what we considered an old and outdated design. Our old site was not actually that old, nearly 2 years, but in web years that must be getting on quite a bit! Having a new website every year or two, or at least a major revamp, is always a good idea to ensure your business on the web keeps up with the times and utilises the latest technology, search engine recommendations and user experience and expectation changes.<br /> <br />We wanted the new site to follow some design principles of <a href="http://en.wikipedia.org/wiki/Web_2.0" target="_blank" rel="noopener noreferrer">Web 2.0</a> to represent some of the capabilities of websites we can develop and recommend, especially the following:-</p>
<ul>
<li>Social network links</li>
<li>JQuery animation</li>
<li>Larger and clearer heading font</li>
<li>Bold text introductions</li>
<li>Larger and clearer buttons</li>
<li>Content from our blog, newsletters and twitter</li>
<li>Simplicity in design</li>
<li>Separate sections/coloured areas</li>
<li>Simple navigation</li>
<li>Stronger use of colours</li>
</ul>
<p>We think the new site is a lot more modern and represents the area of web design and development a lore more. We hope you like it and welcome any comments.</p>`,
        date: '2010-05-08',
        category: 'Amity News'
    },
    {
        slug: 'whats-the-best-email-client-for-getting-things-done-gtd',
        title: 'What’s the Best Email Client for Getting Things Done (GTD)?',
        excerpt: 'In a recent post I talked about searching for a perfect task management system to help organise my work project and tasks with the goal of becoming more productive. I have since started to use Todoist, and although lacking in some areas, it is so far the best Task Manager I have found to suit my needs. Integrating with my GMail is crucial and this was one if it’s selling points.',
        content: `<p>In a <a href="/blog/my-quest-for-the-elusive-perfect-task-management-system/">recent post</a> I talked about searching for a perfect task management system to help organise my work project and tasks with the goal of becoming more productive. I have since started to use <a href="http://todoist.com/" target="_blank" rel="noopener noreferrer">Todoist</a>, and although lacking in some areas, it is so far the best Task Manager I have found to suit my needs. Integrating with my <a href="http://mail.google.com/" target="_blank" rel="noopener noreferrer">GMail</a> is crucial and this was one if it&rsquo;s selling points.</p>
<p>But now the focus is on my <strong>email management</strong>. With so much email coming in and out it is crucial to manage email effectively. Some days I have been known to spend all day answering emails and not work on any important projects at all. That is not good! It is of course important to answer all emails effectively and quickly, but there is something seriously wrong when it takes too much time away from money earning projects.</p>
<p>In my opinion email clients are not designed with effective work practices in mind. They are designed for emailing not working. With automated sending and receiving, pop up notifications, lack of task manager integration, your email client only serves to push as much emailing activity on you as possible! This is not good for your actual work.</p>
<p>At the time of writing I cannot find a suitable email client that supports effective working and the principles of <a href="http://en.wikipedia.org/wiki/Getting_Things_Done" target="_blank" rel="noopener noreferrer"><strong>Getting Things Done</strong></a>. The key points for me are:-</p>
<ul>
<li><strong>Manual Receiving</strong> &ndash; Check email when you are ready to deal with email, not when email wants you to (which is usually immediate if you keep your email client open)</li>
<li><strong>Manual Sending</strong> &ndash; If you have many emails to reply to, do not send them one at a time after writing it because it is possible your recipients would reply back before you exit from your email client, and if you decide to reply back again then you could get stuck in an endless loop of emailing. It is important to write all your replies first, hit the Send button to send all at the same time, then close your emails and get back to work. Check for any more replies at your next scheduled emailing time.</li>
<li><strong>Fast Software</strong> &ndash; I used to use Outlook, but with thousands of emails archived, even across multiple Outlook files, it was sloooooooow.</li>
<li><strong>Fast Searching</strong> &ndash; Nearly all my tasks and project information are in emails. Having a good archiving system (and empty inbox) means I need to search for emails often. Not only searching the content, but labels too. Again, I found Outlook too slow due to so many emails.</li>
<li><strong>Online Storage</strong> &ndash; I work from multiple computers and need to access my email often, in varying locations. So it&rsquo;s crucial my email is stored on the email server (or in the cloud) so I can access it from any computer. I also do not want my email client downloading the email to my computer, because I will have several Gbs of space taken up on every PC. Leave it on the server please! So that&rsquo;s another no no for Outlook.</li>
<li><strong>Browser based</strong> &ndash; Not essential, but if I don&rsquo;t have to install any software then fantastic (thumbs down Outlook!).</li>
<li><strong>Task Manager Integrated</strong> &ndash; When an email comes in that requires a task (most of my emails) I don&rsquo;t want to copy and past the information into a new task in my task manager, I want to save that actual email, or link to it, in the task itself. This is one area email clients seem to be seriously lacking in and only integrate with selected task managers. The task manager I use needs it&rsquo;s own features so I cannot just use any task manager like Outlook Tasks.</li>
</ul>
<p>At the moment I use <a href="http://mail.google.com/" target="_blank" rel="noopener noreferrer">GMail</a>. It does excel at many features over other email clients such as fast software (browser), fast search (they are a search engine after all), excellent labeling and filters to be organised and online storage for access anywhere, integration with popular task management systems. But it is crucially missing a <strong>manual send and receive </strong>that to me is extremely important for more efficient working. GMail immediately shows your new email in the Inbox, and sends email straight away. You can save a message in Drafts to send later, but it&rsquo;s not an Outbox. You have to send each email one at a time.&nbsp; I suppose I can close down Gmail when not in use&hellip; but I need to access my archived email for project information often so&nbsp; this is not practical. As a workaround I have to setup some filters and labels to deal with incoming email so I am not distracted by it, but it&rsquo;s not ideal.</p>
<p>So I now have another quest, <strong>to find that perfect email client to support Getting Things Done</strong>. Any comments welcome!</p>`,
        date: '2010-05-08',
        category: 'Emails'
    },
    {
        slug: 'a-few-ways-to-speed-up-a-slow-pc',
        title: 'A Few Ways to Speed Up A Slow PC',
        excerpt: 'A customer recently asked me for advice on how to speed up their office computers that have been running quite slow lately. There are quite a lot of reasons this may happen so I decided to document a few of the top ways I use to identify and remove the causes of a slow computer. But if these don’t work then it may just be time for a new computer! Note: this is for Windows XP, Vista and 7.',
        content: `A customer recently asked me for advice on how to speed up their office computers that have been running quite slow lately. There are quite a lot of reasons this may happen so I decided to document a few of the top ways I use to identify and remove the causes of a slow computer. But if these don’t work then it may just be time for a new computer! <strong>Note</strong>: this is for Windows XP, Vista and 7.
<p class="h2"><strong>Identify Any Processes Using High Resources and End Them</strong><strong>
</strong></p>
It may be possible you have a program running in the background using high processor or RAM usage. So the first thing I would do when a computer is really slow is take a look at the processes that may be causing it.
<ul>
 	<li>In XP if you press “Control + Alt + Del” you can bring up the “Task Manager” (<strong>Note</strong>: In Windows Vista and 7 you still press Control + Alt+ Del but need to click Start Task Manager in the menu that appears).</li>
 	<li>Once in Task Manager, click the “Processes” tab at the top. You will see all the processes running on the computer</li>
</ul>
<h3>Check CPU (Processor) Usage</h3>
<ul>
 	<li>Then click the “CPU” heading to sort by CPU. This is the percentage of processor power a process is using. If you sort the highest at the top we can see if any process is using a lot of processor power. If you see something that is high (say above 50 to 100) then this may be the process slowing the computer.</li>
 	<li>Make a note of this process for later reference.</li>
 	<li>Select this program and choose “End Process” and monitor your computer to see if it speeds up.</li>
</ul>
<h3>Check Memory (RAM) Usage</h3>
<ul>
 	<li>Additionally you can sort by “Memory” which is the amount of RAM a process is using. If you have a low RAM computer (say &lt; 1Gb) but many processes open using a lot of RAM, it will also slow the computer.</li>
 	<li>Identify any processes using a lot of RAM (e.g. &gt; 200,000 K of memory).</li>
 	<li>Make a note of this process for later reference.</li>
 	<li>Select this program and choose “End Process” and monitor your computer to see if it speeds up.<strong>
</strong></li>
</ul>
If you identified a process causing the computer to slow down then you need to identify what program this process was for (Google it!) and uninstall that program, upgrade to its latest version, or contact the software developer.

<strong>Note</strong>: ending a process like this may end something required to operate your computer, such as Windows explorer, or end a program you are in the middle of using like Microsoft Word! <strong>So make sure to save all data and close all open programs before attempting this!</strong>
<p class="h2"><strong>Check for Spyware</strong></p>
Spyware are programs that may run in the background without you knowing and be sending information about your PC or Internet habits to another computer on the internet. This will therefore use resources and also can infringe on your privacy. These programs can sometimes be installed without you knowing when you install other programs downloaded online (such as free software). Browser toolbars may also be a spyware program.

Install a spyware scanning and removal tool to scan the PC for spyware and remove any found. A suitable free program for this will be <a href="https://www.microsoft.com/en-gb/windows/comprehensive-security" target="_blank" rel="noopener">Microsoft Defender</a>. An alternate system to use that is free to try is <a href="http://download.cnet.com/Spybot-Search-amp-Destroy/3000-8022_4-10122137.html">Spybot Search and Destroy</a>. There are paid for versions of course, but usually it’s paying for the software that puts people off having them, hence the free versions listed.

<strong>Note</strong>: It is possible some legitimate software on your PC may require the background spyware process to be running on order for that program to be running. It is a means for the free software developers to make money, by selling advertising or information to 3rd parties. In my opinion you should not be using this main software program if it requires the operation of a spyware program.

For future safety, when installing software in the future, take note at what other software it is installing. Most times the install process gives you the option of installing the 3rd party software or not. This is very common for Toolbars (e.g. the Yahoo or Google Toolbar).
<p class="h2"><strong>Check for Viruses</strong></p>
It’s possible you have a virus running in the background undertaking some malicious task on your computer like trying to hack into other computers or sending a million emails out per second (Ok maybe not so much but still a lot!). So it is vital you check for viruses. <strong>So many people do not have an up to date anti-virus</strong>!

If have an anti-virus (AV) program on your computer then first check it is up to date. This is because many AV programs included with computers these days are only for a trial period and then they ask you to pay (e.g. Mcafee or Norton). Many people do not pay, <strong>but they think they have an AV installed</strong> (I have one of those Dads who fits this criteria). Without paying for the software (usually an annual subscription), it will not update with the latest virus definitions and so your computer becomes vulnerable to newer virus definitions being released all the time.

Once you know your AV program is up to date then run a full system scan on all drives to make sure you have no viruses, or remove them if any are found.

If you do not have an up to date AV program, or no AV program at all, then two free programs that I have used for many, many years and have not once been infected are <a href="http://download.cnet.com/AVG-Anti-Virus-Free-Edition/3000-2239_4-10320142.html">AVG Free</a> and <a href="http://download.cnet.com/Avast-Free-Antivirus/3000-2239_4-10019223.html?tag=mncol">Avast</a>. There are paid for versions of course, but usually it’s paying for the software that puts people off having them, hence the free versions listed.
<p class="h2"><strong>Defragment (Defrag) The Computer</strong></p>
When you buy a new computer the files are all stored nice and organised on the hard drive. Over time files get spread across different locations (fragmented) and become less and less organised. The time taken for Windows to read files from the hard drive increases due to the time the hard drive needs fetching all the various files and parts of files from different locations on the hard drive. A Disk Defragmentation will organise the files back into more efficient locations on the hard drive and in theory speed up the computer. I personally have not noticed much of a performance increase defragging the hard drive though. I suspect it has to be very fragmented to see any difference.

To defrag the computer:
<ul>
 	<li>Go to Start Menu -&gt; Programs -&gt; Accessories -&gt; Disk Defragment (or similar, possibly dfrgui in Windows 7)</li>
 	<li>Choose the drive (probably (C:) )</li>
 	<li>Optionally choose Analyse Disk if you want to first check if the disk needs to be defragmented</li>
 	<li>Click Defragment Disk</li>
</ul>
<strong>Note</strong>: this can take a while, several hours, if you have a large disk in need of defragmentation so go make a very large cup of coffee.
<p class="h2"><strong>Disk Cleanup</strong></p>
Many files build up on the computer over time, perhaps in the Recycle Bin, cache from browsing the internet, temporary files and more. Disk Cleanup will allow you to easily delete all these unwanted files thus freeing up a lot of space that may improve performance. I personally have not noticed much of a performance increase after running Disk Cleanup.

To run Disk Cleanup:
<ul>
 	<li>Go to Start Menu -&gt; Programs -&gt; Accessories -&gt;  Disk Cleanup</li>
 	<li>Wait for the program to analyse the computer</li>
 	<li>Optionally choose Analyze Disk if you want to first check if the disk needs to be defragmented</li>
 	<li>Click Defragment Disk</li>
 	<li>Select the “Files to Delete” checkboxes, mainly ones that have a lot of disj usage (especially in the GB’s!)</li>
 	<li>Click Clean up system files</li>
</ul>
If your computer is still extremely slow then it may be another issue not mentioned here. Unfortunately it may also be your computer is quite old and unable to handle modern programs that demand more processor and RAM resources. If your computer is over 2 or 3 years old you should consider purchasing a new computer.
<p class="h2">Firewall</p>
A firewall will be an unlikely cause of a slow PC, but if you pass all the above and have a spyware and virus free computer again, a Firewall is just as important as an anti-virus and will not only stop hackers attempting to get in to your computer, but to prevent any malicious software that does make it to your PC connecting to the internet to perform malicious attacks on others (which may be a cause of a slow PC!). It is therefore vital to install a firewall. Windows comes with Windows Firewall. In my opinion Windows XP Firewall lacked the configuration options I needed, and warnings, so I did not know if was effective or not. Windows Vista and 7 should have more configuration options, but as yet I have not seen any/many warnings appear for new programs or suspicious activity, so I also do not how effective it is. So if you want something else other than the built in Windows Firewall, a suitable free one I have also been using for years is <a href="http://download.cnet.com/ZoneAlarm/3000-10435_4-10039884.html" target="_blank" rel="noopener noreferrer">ZoneAlarm Free</a>. There are paid for versions including ZoneAlarm of course, but usually it’s paying for the software that puts people off having them, hence the free version listed.`,
        date: '2010-04-21',
        category: 'Advice'
    },
    {
        slug: 'manage-your-email-more-efficiently',
        title: 'Manage Your Email More Efficiently',
        excerpt: 'Here’s a quick explanation of how email accounts provided by most website and email hosting providers work (such as us), where and how your email is stored, issues that may occur and some recommendations for different uses.',
        content: `<p>Here&rsquo;s a quick explanation of how email accounts provided by most website and email hosting providers work (such as us), where and how your email is stored, issues that may occur and some recommendations for different uses.</p>
<p class="h2">Hosted Email Accounts</p>
<p>The email accounts provided for your are stored on the hosting server, most likely in the same web hosting account where your website is. When someone emails you the email will arrive at our always on server and sit there until you connect to read it. That way your office or home computer does not have to be on all the time.</p>
<p>If you use an email client like Outlook or Thunderbird to read your email there are a few things that could happen depending on your setup..</p>
<ol>
<li>The most likely scenario is your email client will <strong>download the email to your computer</strong> and delete it from the server (a POP account). So when you read your email you are reading it from your computer and not on the server anymore.</li>
<li>Another common scenario is your email client still downloads email as above but is set to &ldquo;<strong>leave a copy of the message on the server</strong>&ldquo;.</li>
<li>Alternatively you may have a setup where <strong>email is stored on the server</strong> and your email client reads it directly from there (an IMAP account).</li>
</ol>
<p class="h2">Advantages and Disadvantages</p>
<p>As with anything, there are advantages and disadvantages and you need to choose the best solution for the way you work.</p>
<ol>
<li>The <strong>advantage</strong> of downloading email to your computer means you can archive it how you want and store as much email as you want for as long as you want. Perfect for a 1 computer setup for email that needs to be stored for long periods. The <strong>disadvantage </strong>is you cannot then read it on other devices computers, webmail or mobile devices.</li>
<li>The <strong>advantage </strong>of &ldquo;Leaving a copy of the message on the server&rdquo; means you have the advantages of point 1 but are able to read it on other devices because it is still stored on the server for access elsewhere. The <strong>disadvantage </strong>is you start to have multiple copies of email that may become difficult to manage and the server space will fill up with your emails, so you need the right provider for this service.</li>
<li>Not downloading at all and reading from the server has the <strong>advantages </strong>of being able to read it from any other devices, but the <strong>disadvantages </strong>is you will not have a copy to archive on your own computer, you need to additionally arrange this.&nbsp; The server space will also fill up as in point 2 so you need a service provider that can provide this extra storage space.</li>
</ol>
<p class="h2">Which Is Right For You?</p>
<ol>
<li>If you <strong>only read email from one computer</strong>, regularly download the email and want to archive all your email messages on your computer for future reference, then option 1 is the best setup.</li>
<li>If you want to <strong>access email from multiple devices</strong>, but<strong> regularly download email</strong>, want to <strong>archive your email on your main computer</strong> then all the above options are suitable (but for option 3 you do have to make sure you manually archive the email).</li>
<li>If you want to <strong>access email from multiple devices</strong>, but <strong>do not want to download and archive it on your own computer</strong> and <strong>use the service provider to archive your email</strong>, then it depends on your service provider. You may or may not be able to use the above options are suitable.</li>
</ol>
<p>If you want the last option above then your service provider needs to allow you store a large amount of email space at low cost so you can easily store your email with them and not worry about filling up server space. You can then access your email from any device any where. You may use an email client like Outlook to do this, but Outlook may still download the mail to your computer (you have to be sure to set it to <strong>not</strong> download the email to your computer so its left there to access from other devices). If you want to abandon Outlook or other email client all together, many email providers also provide a browser based email clients so you can access and read your email through a browser.</p>
<p>There are a few email provides that provide a large amount of storage space for free or low cost such as Hotmail and Yahoo but <a href="/blog/benefits-of-google-mail-gmail-free-web-based-email-service-with-massive-sto" target="_blank" rel="noopener noreferrer">I recommend <strong>Google Mail</strong></a><strong> (<a href="http://mail.google.com" title="Go to GMail" target="_blank" rel="noopener noreferrer">GMail</a>)</strong> due to not only the high amount of free storage space but the quick and minimalistic interface.</p>
<p>If you want to discuss the best setup for the way you work, please feel free to <a href="/contact-us" title="Contact Us" target="_blank" rel="noopener noreferrer">contact me</a>.</p>`,
        date: '2010-03-30',
        category: 'Emails'
    },
    {
        slug: 'my-quest-for-the-elusive-perfect-task-management-system',
        title: 'My Quest For The Elusive, Perfect Task Management System',
        excerpt: 'I’ve wasted hours and hours trying to find a perfect task management system. There are many task management systems out there, with Remember the Milk (RTM), Google Tasks and Todoist all coming to mind… but not a single one I have tried seem to have a crucial component which is email integration. Maybe it’s a bad time for me, I understand there are Google/Greasemonkey issues and also add-on issues with Firefox 3.6, both of which task manages use to integrate their systems into email, but the developers have had long enough to fix these known issues, so maybe they just aren’t good enough.',
        content: `<p>I&rsquo;ve wasted hours and hours trying to find a perfect task management system. There are many task management systems out there, with <a href="http://www.rememberthemilk.com/" target="_blank" rel="noopener noreferrer">Remember the Milk (RTM)</a>, <a href="http://mail.google.com/tasks/" target="_blank" rel="noopener noreferrer">Google Tasks</a> and <a href="http://todoist.com/" target="_blank" rel="noopener noreferrer">Todoist</a> all coming to mind&hellip; but not a single one I have tried seem to have a crucial component which is <strong>email integration</strong>. Maybe it&rsquo;s a bad time for me, I understand there are Google/Greasemonkey issues and also add-on issues with Firefox 3.6, both of which task manages use to integrate their systems into email, but the developers have had long enough to fix these known issues, so maybe they just aren&rsquo;t good enough.</p>
<p>For someone who&rsquo;s tasks mainly arrive in the form of emails, it is crucial that a task manager has the following features:-</p>
<ol>
<li><strong>One click creation of a task from an email</strong> &ndash; I don&rsquo;t want to have an email with all the data I need, to then have to click New Task and copy and paste the information from the email to the task. That defeats the object of using a task manager, which is to help time management. RTM states it can do this, although at the time or writing neither the GMail Gadget nor Firefox addon work for me.</li>
<li><strong>Separate Tasks from Email</strong> &ndash; I actually use <a href="/blog/using-gmail-as-a-task-manager" target="_self" rel="noopener noreferrer">GMail as my task manager</a> at the moment and it works fantastically well using Superstars and Multiple Inboxes. There is one major flaw&hellip; because I have so much email coming in I can sometimes spend all day in email conversations without actually working on my tasks! Therefore your task list needs to be separate to your email, so you can work through tasks, and check your email only a few times a day. An important GTD philosophy!</li>
<li><strong>Tasks &ldquo;Home Page&rdquo;</strong> &ndash; Following on from above, even if not using GMail as a task manager, and using one of the GMail integrated gadgets that sit next to your email, such as RTM and Toodist provide (or Tasks in Outlook), you still have your email to distract you from your tasks. So a separate &ldquo;home page&rdquo; or task manager system that just shows your tasks is required, then you can close your email and Get Things Done.</li>
</ol>
<p>Although there are of course many more features a task manager needs, the above points are crucial if you actually want to get things done, you need to separate email from tasks and to create tasks from emails easily, but seem to be a weakness in many of the systems I found.</p>
<p>With the above features you of course still need to have a labelling/tagging, prioritisation as well as target dates, mobile access such as from the iPhone, and reminders.</p>
<p>I hope I can find one soon because &ldquo;<em>I am wasting so much time trying to find a system to improve my time</em>&ldquo;!</p>
<p>Any ideas and comments welcome </p>`,
        date: '2010-02-17',
        category: 'Emails'
    },
    {
        slug: 'using-gmail-as-a-task-manager',
        title: 'Using GMail As A Task Manager',
        excerpt: 'GMail (see previous blog) is many things to different people, but a few things everyone agrees with is it\'s simple, efficient and flexible. I emphasise flexible because you can configure it to work that suits your needs. I use it not just for email but as my Task Management System.',
        content: `<p>GMail (see previous <a href="/blog/benefits-of-google-mail-gmail-free-web-based-email-service-with-massive-sto">blog</a>) is many things to different people, but a few things everyone agrees with is it's simple, efficient and flexible. I emphasise flexible because you can configure it to work that suits your needs. I use it not just for email but as my <strong>Task Management System</strong>.</p>
<p>To use GMail as your task manager, you will need to:</p>
<ol>
<li>Setup <strong>Superstars </strong>or <strong>Labels </strong>for different priorities</li>
<li>Setup <strong>Multiple Inboxes</strong> to show the emails assigned the Superstars or Labels</li>
</ol>
<p class="h2">Add Superstars and Multiple Inboxes to Your GMail</p>
<p>Click on Google Labs (the green beaker in the top right menu&nbsp;) and you will see a list of useful features you can enable to improve your GMail.</p>
<ol>
<li>Find Superstars and enable it</li>
<li>Find Multiple Inboxes and enable it.</li>
<li>Click Save Changes at the bottom</li>
</ol>
<p class="h2">Setup Superstars</p>
<p>Now you have added the Superstars feature, you can choose the Stars that you want to use for your email messages. At the time of writing there are 12 icons to choose from:-</p>
<ol>
<li>First decide what priorities you need to assign to your emails, and then choose the stars to represent them. For example, I use the following:-
<ul>
<li><strong>Urgent </strong>- Red Exclamation</li>
<li><strong>Medium </strong>- Red Star</li>
<li><strong>Low </strong>- Orange Star</li>
<li><strong>Whenever </strong>- Yellow Exclamation</li>
</ul>
</li>
<li>In Settings click on the General tab</li>
<li>You will see the Superstars row which displays the stars you can choose from</li>
<li>Drag the required images to the "In Use" row and drag what you don't need to the "Not In Use"</li>
<li>Click Save Changes at the bottom</li>
</ol>
<p>Now when you view your messages, you can click the star icon to the left of your messages to assign a star, and keep clicking to move through the order of stars you have setup.</p>
<p>So now you can assign different stars to the emails you will need to be able to group the stars together in "panes", and in the order of high to low priority.</p>
<p class="h2">Multiple Inboxes</p>
<p>Multiple Inboxes is not the best name to give for this feature. It is not in fact Multiple "Inboxes", but is multiple "panes" on your Inbox page that show emails that match a certain criteria. You can add any search, label or star criteria to one of these Inboxes and it will show the emails that match your criteria. The intention is to setup an Inbox for each of your stars.</p>
<ol>
<li>In Settings, click on Multiple Inboxes (you should see this tab once you enable it in Labs)</li>
<li>You will see 5 rows of boxes for the "Panes". The boxes are for the "Search query" and the "Panel title".</li>
<li>For the Search Query you need to enter the search query that represents the Superstars. For example, entering "has:red-bang" (without quotes) will show all messages that have the red exclamation. To find the right term for the star, hover over the star to see the name pop up, and this is what you use. I've included the list below.</li>
<li>For the name, enter the term you want to assign for the stars, for example, my red-bang (red exclamation icon) is for Urgent email, so I name it "Urgent".</li>
<li>Make sure to enter the information in the boxes in the order you want them. So my "has:red-bang" for "Urgent" messages is in the top so its displayed in the top pane.</li>
<li>Choose how many to display in a pane</li>
<li>Choose whether to show the panes Above, Right or Below your main Inbox. I choose to put mine above so I see my tasks and priorities as soon as I reach my Inbox page, and no need to scroll down.</li>
<li>Click Save Changes</li>
</ol>
<p class="h2">GMail as Your Task Manager</p>
<p>Now when you go to your Inbox you should see the new panes you have setup, and within them the emails you have assigned the stars to.</p>
<p class="h2">Using Labels</p>
<p>You don't have to use stars of course, you can use Labels. By going to Settings and the Labels tab you can create Labels named after your priorities, then create the Multiple Inboxes to show the labels (for example, by entering "label:urgent"), and then assign emails the Labels. I find assigning superstars much quicker (one click) than assigning Labels so I don't use them.</p>
<p class="h2">Removing the Email / Marking as Complete</p>
<p>Once the email has been dealt with and you no longer need it in the pane, just click the star to the left of the email to remove it. You may need to click Refresh above the pane in order to refresh the view. The email will be removed.</p>
<p>Hope that helps!</p>
<p class="h2">Search Query For Superstars</p>
<ul>
<li>has:red-bang (or l:^ss_cr)</li>
<li>has:yellow-bang (or l:^ss_cy)</li>
<li>has:red-star (or l:^ss_sr)</li>
<li>has:yellow-star (or l:^ss_sy)</li>
<li>has:orange-star (or l:^ss_so)</li>
<li>has:blue-star (or l:^ss_sb)</li>
<li>has:green-star (or l:^ss_sg)</li>
<li>has:purple-star (or l:^ss_sp)</li>
<li>has:blue-info (or l:^ss_cb)</li>
<li>has:orange-guillemet (or l:^ss_co)</li>
<li>has:green-check (or l:^ss_cg)</li>
<li>has:purple-question (or l:^ss_cp)</li>
</ul>`,
        date: '2010-02-15',
        category: 'Emails'
    },
    {
        slug: 'how-to-rss-feeds-of-your-interspire-email-marketer-newsletters',
        title: 'How to: RSS Feeds of Your Interspire Email Marketer Newsletters',
        excerpt: 'RSS Feeds are a very useful and powerful feature that allow your content to be listed on other websites, Twitter, RSS Readers and a lot more, so people can obtain instant up to date new content from you without having to visit your website all the time. So why not export your Interspire Email Marketer Newsletters in the same way? This way even people who do not subscribe to your newsletter will be updated. This blog describes how to export the newsletters as RSS Feeds, its actually very easy.',
        content: `<p>RSS Feeds are a very useful and powerful feature that allow your content to be listed on other websites, Twitter, RSS Readers and a lot more, so people can obtain instant up to date new content from you without having to visit your website all the time. So why not export your Interspire Email Marketer Newsletters in the same way? This way even people who do not subscribe to your newsletter will be updated. This blog describes how to export the newsletters as RSS Feeds, its actually very easy.</p>
<p>If you are not familiar with RSS Feeds, read my blog here on the <a href="/blog/benefits-of-rss-feeds-all-your-favourite-news-and-content-in-one-place/">benefits of exporting content as RSS Feeds</a>. I also talk about the <a href="/blog/email-newsletters-keep-your-contacts-and-customers-interested-with-exciting/">benefits of Email Marketing here</a>. I use an industry leading newsletter system for my newsletters.</p>
<p class="h2">How Do I Export My Newsletters as RSS Feeds?</p>
<ol>
<li>Login to your newsletter system</li>
<li>Go to Contact Lists -&gt; View Contact Lists</li>
<li>On the right hand side of your Lists, in the column Archive, you will see the RSS icon</li>
<li>Click the icon to be taken to the RSS Feed of newsletters sent to that list</li>
</ol>
<p>That&rsquo;s it!</p>
<p><strong>Note</strong>: A little word about the RSS Feed from Interspire Email Marketer&hellip; it does not provide the correct format for RSS Feeds so you may get errors when using the default system. You will first need to fix this rss.php file. I have posted a fixed file on the <a href="http://www.interspire.com/forum/showthread.php?p=61830" target="_blank" rel="noopener noreferrer">Interspire forum</a> (my version is 5.7.4, I have not tested on older versions), but it also available below. This needs to go into the root directory for your newsletter tool. Interspire stated they will release this with the next version of Email Marketer.</p>
<p class="h2">So What Can I Do With My RSS Feed?</p>
<p>Here are some ideas you can use to spread your newsletters to non-subscribers:-</p>
<ul>
<li>Use <a href="/blog/automatically-post-rss-feeds-blogs-news-to-twitter-and-facebook-using-twitt">TwitterFeed to update Twitter</a>, Facebook and others when a newsletter is sent</li>
<li>Submit your RSS Feed to <a href="/blog/benefits-of-rss-feeds-all-your-favourite-news-and-content-in-one-place/">online feed websites</a> so other people online may find it</li>
<li>Add a &ldquo;Subscribe&rdquo; link on your website, blog, email footers and other website profiles to encourage people to sign up</li>
<li>Ask other peoples to display your feeds on their website</li>
</ul>
<p>Hopefully this will increase your target audience when you send out new newsletters.</p>
<p>Here is an updated rss.php file:-<br /> <a href="http://www.interspire.com/forum/attachment.php?attachmentid=732&amp;d=1263486960" target="_blank" rel="noopener noreferrer">rss.php</a></p>`,
        date: '2010-01-20',
        category: 'Design/Development'
    },
    {
        slug: 'adding-google-adsense-to-a-joomla-content-page-to-make-money',
        title: 'Adding Google Adsense to a Joomla Content Page To Make Money',
        excerpt: 'Google AdSense is a Google application that allows website owners to earn revenue from visitors to their website. It’s those “Ads by Google” links you see on this blog page below this post, and on the right hand column. It’s a great way to earn a little extra income if you have a busy website. This blog describes how to add Google AdSense inside a content page on your Joomla website.',
        content: `<a href="https://www.google.com/adsense/" target="_blank" rel="noopener noreferrer">Google AdSense</a> is a Google application that allows website owners to earn revenue from visitors to their website. It’s those “Ads by Google” links you see on this blog page below this post, and on the right hand column. It’s a great way to earn a little extra income if you have a busy website. This blog describes how to add <a href="https://www.google.com/adsense/" target="_blank" rel="noopener noreferrer">Google AdSense</a> inside a content page on your <a href="/blog/the-benefits-of-using-the-joomla-content-management-system/">Joomla</a> website.
<p class="h2">What Is Google AdSense</p>
Without going into too much detail, (because this post is how to add it to <a href="/blog/the-benefits-of-using-the-joomla-content-management-system/">Joomla</a>) <a href="https://www.google.com/adsense/" target="_blank" rel="noopener noreferrer">Google AdSense</a> is a Google application that allows website owners to display Google links on their website, which when clicked, will generate some revenue for the website/AdSense account owner.  So if you have thousands of daily visitors, you could earn yourself a nice little income by displaying these links on your website. Google tries to create links relevant to the page content that the ads are displayed on so visitors may be interested in clicking these links.

This method can also be used to display the code on all pages using the normal way to show modules on your site, but I go into detail on how to add within a specific page content.

You can create a Google AdSense account <a href="https://www.google.com/adsense/" target="_blank" rel="noopener noreferrer">here</a>
<p class="h2">How Do I add Google Adwords To A Content Page?</p>
The Joomla editor can strip out special code that is required to display the AdWords, so without some advanced configuration you can add the AdSense code using Joomla modules and the “loadmodule” position function that is used to display a Module Position in any content page.
<h3>First, Install a Module to Allow Code to Be Entered</h3>
The Joomla Editor will strip out some special code entered into it, making it hard to enter some code like javascript required to display AdSense ads. To overcome this you can install a Module that allows any code to be entered.
<ol>
 	<li>Download a Custom Code in Modules from the <a href="https://extensions.joomla.org/tags/custom-code-in-modules/" target="_blank" rel="noopener noreferrer">Joomla Extensions directory for Custom Code</a>. A suitable one is <a href="http://extensions.joomla.org/extensions/edition/custom-code-in-modules/3668" target="_blank" rel="noopener noreferrer">Blank Module</a>.</li>
 	<li>Go to Extensions -&gt; Install/Uninstall to install it.</li>
 	<li>Click Browse and choose the downloaded zip file</li>
 	<li>Click Upload File &amp; Install</li>
</ol>
The Custom Code in Modules module should show have installed.
<h3>Second, Enable the loadposition plugin</h3>
<ol>
 	<li>Go to Extensions -&gt; Plugins</li>
 	<li>Ensure the Plugin Content – Load Module is enabled</li>
 	<li>If not, click on the Enable icon to enable it</li>
</ol>
<h3>Third, Create  New Module for the AdSense Code</h3>
<ul>
 	<li>In Admin go to Extensions -&gt; Module Manager</li>
 	<li>Click New</li>
 	<li>Choose the newly installed module to add custom code, e.g. Blank Module.</li>
 	<li>Enter the code in textarea required for the custom code</li>
 	<li>On the top left, give the module a Name, and choose Show Title = No (unless you want the module title displayed) and Enabled = Yes.</li>
 	<li>For the Position drop down, enter a position name you want to refer to this module as (its a drop down but it allows you enter your own text). So you can call it something like “google_adsense”.</li>
 	<li>Click Save</li>
</ul>
You have now created a module in position “google_adsense” that has the Google AdSense code.
<h3>Lastly, Add the Module to Your Content Page</h3>
To display it on an Article page (not in another module or component), just enter the following in the page content editor, click Save and it should display on the website:-

{loadposition google_adsense}

You can re-enter this code to load the same position on multiple pages if you want.`,
        date: '2010-01-19',
        category: 'SEO'
    },
    {
        slug: 'improve-your-wordpress-blog-theme-finding-free-themes-and-installing-them',
        title: 'Improve Your WordPress Blog Theme – Finding Free Themes and Installing Them',
        excerpt: 'I’ve had a few clients recently ask me to setup a blogging system. I nearly always recommend WordPress because it is one of the most common and powerful blogging systems available and is free to download and use. Setting up the blog is straightforward if you know how to FTP and create a MySQL database on your web hosting account. Once setup it is ready to go, you can start blogging right away.',
        content: `I’ve had a few clients recently ask me to setup a blogging system. I nearly always recommend <a href="http://wordpress.org/" target="_blank" rel="noopener noreferrer"><strong>WordPress</strong></a> because it is one of the most common and powerful blogging systems available and is free to download and use. Setting up the blog is straightforward if you know how to FTP and create a MySQL database on your web hosting account. Once setup it is ready to go, you can start blogging right away.

The only issue in my mind is the <strong>blog design</strong>. The default design is quite bland and probably very common, yet there are thousands of free designs available that are far more professional and just look much better, so why not change it? This blog describes how to obtain and install a new theme.
<p class="h2">Obtaining a WordPress Theme</p>
With most blog owners not knowing PHP or HTML, creating a  bespoke design would not be possible. Luckily there are thousands of designs to choose from online, both free and commercial ones. So the first step in installing a new theme is to browse themes you like and download them.

Here is a list of websites that provide free WordPress themes.
<ul>
 	<li><a href="http://wordpress.org/extend/themes/" target="_blank" rel="noopener noreferrer">http://wordpress.org/extend/themes/</a> – Official WordPress site</li>
 	<li><a href="http://www.themes2wp.com/" target="_blank" rel="noopener noreferrer">http://www.themes2wp.com/</a></li>
 	<li><a href="http://www.wpthemes360.com/" target="_blank" rel="noopener noreferrer">http://www.wpthemes360.com/</a></li>
 	<li><a href="http://wordpressthemesforfree.com/" target="_blank" rel="noopener noreferrer">http://wordpressthemesforfree.com/</a></li>
 	<li><a href="http://www.wpthemespot.com/" target="_blank" rel="noopener noreferrer">http://www.wpthemespot.com/</a></li>
</ul>
These are just a selection from the top results of a Google search for “wordpress themes”. There are many more sites to download themes.

Browse through the designs on offer and once you find some you like, Download them. The file should be a .zip file that we can now use to install into your WordPress blog.
<p class="h2">Installing a WordPress Theme</p>
Once you have downloaded a theme .zip file you are ready to install it. Here is a simple guide for version 2.9. Make sure your <strong>wp-content/themes</strong>/ folder is writable by the system.
<ol>
 	<li>Login to your WordPress blog and go to <strong>Appearance -&gt; Add New Theme</strong> in the left sidebar</li>
 	<li>Click the Upload tab at the top</li>
 	<li>Click Browse and choose your downloaded theme</li>
 	<li>Click Install Now</li>
 	<li>The theme should install, so now click on <strong>Appearance -&gt; Themes</strong> in the left menu so we can Activate it</li>
 	<li>You should see your new theme listed, so click Activate next to it to make this the new live, theme</li>
 	<li>Your done! Visit your blog to see the new theme.</li>
</ol>
<p class="h2">But I Want a Bespoke Theme, e.g. My Website Design?</p>
This will require experience of PHP and HTML in order to create your own theme. Your web develop should be able to help you, otherwise feel free to <a href="/contact-us" target="_blank" rel="noopener noreferrer">contact me</a> and I will be able to help you.`,
        date: '2010-01-18',
        category: 'Design/Development'
    },
    {
        slug: 'using-online-forums-and-discussion-boards-to-increase-backlinks-to-your-web',
        title: 'Using Online Forums and Discussion Boards to Increase Backlinks to Your Website',
        excerpt: 'It is well known one of the most important techniques to increase rankings is backlinks. Google in fact started its ranking algorithm based on the number of other websites that have links to yours. If someone puts a link to your site, they are in fact approving or recommending your website in a way, and that’s how Google sees it. If your website has 5 links to it from other sites, compared to your competitor who has 1000, then your competitor clearly has a site worth linking to, and its rankings will reflect that. This blog describes a great way to increase backlinks to your website without costing anything.',
        content: `<p>It is well known one of the most important techniques to increase rankings is backlinks. Google in fact started its ranking algorithm based on the number of other websites that have links to yours. If someone puts a link to your site, they are in fact approving or recommending your website in a way, and that&rsquo;s how Google sees it. If your website has 5 links to it from other sites, compared to your competitor who has 1000, then your competitor clearly has a site worth linking to, and its rankings will reflect that.</p>
<p>This blog describes a great way to increase backlinks to your website without costing anything.</p>
<p class="h2">So How Can I Increase Backlinks to My Site?</p>
<p>There are many ways to do this, using other people&rsquo;s websites as part of link exchanges, banner advertising programs, RSS Feeds, Blogs and a lot more. One of the most popular methods is on Forums or Discussion Boards.</p>
<p>The explosion of low cost hosting and forum systems like PHPBB3 means it is easy for anyone, anywhere to setup a forum about any topic, resulting in an explosion of forums online, each one targeting their own niche topic. Forums topics ranging from the popular like <a href="http://www.thefootballforum.net/" target="_blank" rel="noopener noreferrer">football</a>, <a href="http://www.talk-movies.com/" target="_blank" rel="noopener noreferrer">movies</a> and <a href="http://www.computerforum.com/" target="_blank" rel="noopener noreferrer">computers</a> to weird and niche topics like <a href="http://pub23.bravenet.com/forum/static/show.php?usernum=1948067842&amp;frmid=70&amp;msgid=0" target="_blank" rel="noopener noreferrer">hats</a>, <a href="http://forum.netweather.tv/" target="_blank" rel="noopener noreferrer">the weather</a> and <a href="http://www.arachnoboards.com/ab/" target="_blank" rel="noopener noreferrer">spiders</a>. Whatever your interest, there is a good chance a forum exists for you.</p>
<p>There are three good things about forums when it comes to backlinks to your website:-</p>
<ol>
<li>Most of them have a <strong>profile </strong>section where you can add a homepage URL. Not many people will see this, but search engines should, and that&rsquo;s what matters for ranking</li>
<li>Some of them allow <strong>signatures </strong>in your post footer, allowing links to your website to be added there too. In addition to search engines, more people will see your website links and possibly visit your site</li>
<li>You may even be able to add links within the discussion <strong>post </strong>created, also meaning more visitors and search engines will visit your website.</li>
</ol>
<p class="h2">Read The Rules</p>
<p>The key thing to making sure this works though is obey the forum rules&hellip; almost all forums have rules of use, which if broken could result in a ban. Some forums do not allow links in signatures or posts, and nearly all forums will certainly not allow spam, so make sure your post is relevant and topical to the forum discussion! Here are some tips in making forum acceptable posts:-</p>
<ol>
<li>Check the <strong>Forum Rules</strong>. Find out if the forum allows links in posts and your post footer.</li>
<li>Check if your forum<strong> profile is public</strong> and allows a home page URL</li>
<li><strong>Choose a popular forum</strong>. The higher ranking the forum, the better Google thinks of it and the more visitors it will have.</li>
<li><strong>Choose a forum relevant to your website and business</strong>. This ensures other forum readers will read and join in your discussions.</li>
<li><strong>Raise topical, legitimate discussions</strong>. We all have something to learn and something to give, so use forums to ask questions and increase your knowledge, and answer other peoples questions to help them and build a good reputation.</li>
<li><strong>Do not spam</strong>! Never try to sell your products and services directly, people will ignore you and you may get banned and the post removed</li>
</ol>
<p class="h2">How Do I Find These Forums?</p>
<ol>
<li>Have fun with Google. Just search for relevant topics to your business or website. For example, a recent customer of mine, a Personal Trainer, would search for the terms &ldquo;fitness forum&rdquo; which would result in a <a href="http://www.google.co.uk/search?q=fitness+forum&amp;ie=utf-8&amp;oe=utf-8&amp;aq=t&amp;rls=org.mozilla:en-GB:official&amp;client=firefox-a" target="_blank" rel="noopener noreferrer">number of forums to join</a>.</li>
<li>For a few of the top forums, check out the rules and other forum posts to see if links can be added in the posts, signature or profile pages.</li>
<li>Register on the forum using your name, username and website address you want to link to</li>
<li>Read forum topics, find one you are interested in or know something about, and join in the discussion.</li>
<li>Raise a question or discussion about a topic you are interested in</li>
</ol>
<p class="h2">Watch Out for &ldquo;No Follow&rdquo; Forums</p>
<p>There is one issue to look out for, which I wont go into too much detail here, but some forums and other websites that allow people to add links will add the &ldquo;relationship&rdquo; attribute (rel) with a value of &ldquo;nofollow&rdquo;. This attribute will be in the code for the hyperlink and look like <strong>rel=&rdquo;nofollow&rdquo;</strong>. This is actually telling Google <strong>not</strong> to use the link as a factor for ranking. It was created by Google so their spiders would not follow links to spammers sites (in blog comments) that would influence rankings.</p>
<p>It is still worth adding a link to the website though, because Google can still visit the website and of course human traffic will stay play a part. There are forums that do not use this so look out for those.</p>
<p class="h2">When Do I Get Results?</p>
<p>There is no guarantee when it comes to search engine rankings so you may not actually see a benefit, not right away anyway. The problem this method is it is time consuming to build up a lot of links back to your site, so this needs to be considered a long term investment. But the good thing about that is you should be having fun along the way, it&rsquo;s a social experience. Joining discussions, answering questions and learning from others is an excellent way to enhance your business reputation and knowledge anyway.</p>
<p class="h2">Other Websites to Submit Links</p>
<p>There are other websites and methods to submit links back to your website, such as:-</p>
<ul>
<li>Commenting in Blogs</li>
<li>Article Submission Websites</li>
<li>Social Networking Websites</li>
</ul>`,
        date: '2010-01-15',
        category: 'SEO'
    },
    {
        slug: 'automatically-post-rss-feeds-blogs-news-to-twitter-and-facebook-using-twitt',
        title: 'Automatically Post RSS Feeds (Blogs, News) to Twitter and Facebook Using Twitter Feed',
        excerpt: 'Having a busy schedule means I find it hard to update Twitter often so I am always looking at ways to help. Although it is recommended to write and post the tweets yourself to provide a human interaction, there are a number of automated tweeting systems that can compliment your usual tweeting schedule and make life easier. One such system is Twitter Feed.',
        content: `<p>Having a busy schedule means I find it hard to update Twitter often so I am always looking at ways to help. Although it is recommended to write and post the tweets yourself to provide a human interaction, there are a number of automated tweeting systems that can compliment your usual tweeting schedule and make life easier. One such system is Twitter Feed.</p>
<p class="h2">Why Should I Use Twitter Feed?</p>
<p>If you write a blog and/or have a Latest News listing on your website, then it is very likely your website can export the blog or news content as an RSS Feed.&nbsp; Twitter Feed can read your RSS Feed and post any new content onto Twitter for you, providing a title and link back to the original content. It is a fantastic way to not only ensure you tweet more often but to increase visitors to your blog or news pages.</p>
<p class="h2">How Do I Get Twitter Feed?</p>
<p>Just visit <a href="http://twitterfeed.com/" target="_blank" rel="noopener noreferrer">http://twitterfeed.com/</a>, and register for an account. Twitter Feed even allows you sign in using other accounts you have such as your Google or Yahoo account. So no need to register yet again on another system, just use your credentials from other accounts you have.</p>
<p class="h2">How Do I Use Twitter Feed?</p>
<p>Once you have signed into Twitter Feed you should be on the dashboard page where you can manage your account. To add a new feed:-</p>
<ol>
<li>Click &ldquo;Create New Feed&rdquo;.</li>
<li>Enter a friendly name to identify the feed, and the RSS Feed URL.</li>
<li>Click Continue to Step 2.</li>
<li>Choose the service you want to post updates too, it is not just Twitter you can post to but other networks like Laconica, Ping.fm, Facebook, and Hellotxt.</li>
<li>Click All Done to create the Twitter Feed</li>
</ol>
<p>At Step 2 above, you can also click Advanced Settings to control more settings such as:-</p>
<ul>
<li>The frequency Twitter Feed should check your RSS Feeds</li>
<li>The number of new posts to make (up to 5)</li>
<li>If you want a pre or post fix some text to the post message, for example, I pre fix my blog posts with &ldquo;New Blog: &rdquo; and news &ldquo;New News: &rdquo; .</li>
<li>Whether you want to include the title and/or description of the post.</li>
<li>If you want to filter out posts based on keywords</li>
</ul>
<p class="h2">Any Disadvantages of Using Twitter Feed?</p>
<p>The only disadvantage of using something like Twitter Feed or any automated posting system, is that the post will probably look like it is automated to your followers. Many people use Twitter for human to human interaction and may not like to follow automated posts all the time. It of course depends on the interest people have in your post, so as any tweet, make sure its topical to your follows and captures their interest. Also make sure to still manually tweet in between your automated tweets to show that there still is a human person there that followers can engage with.</p>`,
        date: '2010-01-12',
        category: 'Design/Development'
    },
    {
        slug: 'benefits-of-google-mail-gmail-free-web-based-email-service-with-massive-sto',
        title: 'Benefits of Google Mail (GMail), Free Web Based Email Service with Massive Storage',
        excerpt: 'Part 1 of my Google Apps Blog series describes what GMail is and the benefit of using it over conventional email accounts with your hosting provider for example.',
        content: `<p>Part 1 of my <a href="/blog/google-apps-free-online-email-calendar-and-documents/">Google Apps Blog Series</a> describes what GMail is and the benefit of using it over conventional email accounts with your hosting provider for example.</p>
<p class="h2">What is GMail?</p>
<div id="contents_box"><strong>Google Apps Contents</strong><ol>
<li><a href="/blog/benefits-of-google-mail-gmail-free-web-based-email-service-with-massive-sto">Google Mail (GMail)</a></li>
<li><a href="/blog/google-documents-free-word-processing-spreadsheets-and-more/">Google Documents</a></li>
<li><a href="/blog/google-calendar-organise-and-synchronise-your-schedule-online/">Google Calendar</a></li>
</ol></div>
<p>Gmail is a free Email service provided by Google that is accessed through a web browser rather than an email client like Outlook. Google's abundance of servers allow them to provide a lot more space than most other providers, at the moment a massive 7Gb of email storage (Google constantly increase this space so by the time you fill this account, it's quite possible it has increased in size).</p>
<p class="h2">Why Should I Use GMail?</p>
<p>GMail has many, many features, with new ones being created often, but in my mind the following select features make GMail an excellent system to use:-</p>
<ul>
<li><strong>Browser based</strong> - access your email anywhere with an internet connection, on any computer. No need to download email to different PCs.</li>
<li><strong>Free </strong>- A massive 7Gb of storage space free. My own email service with Amity Web Solutions only provides from 50Mb to a few hundred Mb depending on the requirements.</li>
<li><strong>Fast Search</strong> - Google is a search engine after all, so their search facility is fast and efficient</li>
<li><strong>Own Domain</strong> - you can send email from your own domain names so recipients wont see your Google Mail address, just your main email address.</li>
<li><strong>Multiple Email Addresses</strong> - add all your other email accounts (e.g. Hotmail, Yahoo) to your GMail account to manage ALL your emails on one convenent place</li>
<li><strong>Labels </strong>- Instead of folders you can create Labels to assign to emails to efficiently organise and manage emails, easily filtering all emails with a certain label. More powerful than folders because you can add multiple labels to an email</li>
<li><strong>Filters</strong> - Much like "Rules" in a conventional email client, filters allows you to setup rules to process emails as they come in. For example, you can setup a filter to assign a label you have created (perhaps a customer name) to an email that is from a certain email address.</li>
<li><strong>Conversations </strong>- One of the best features for me is conversations. Some emails go back and forth many times, like a conversation. But instead of showing each individual email in the Inbox, it merges the same subject emails together in a thread and represents it as one email in your inbox. This keeps the number of emails in your inbox down, and makes it much easier to review previous emails on the same topic.</li>
</ul>
<p>Google is also constantly adding "add ons" to GMail to make your email management even more powerful. Called "Google Labs", it is a collection of add ons you can add to your GMail account. The following add ons are a few I use to improve my email productivity:-</p>
<ul>
<li><strong>Super Stars</strong> - This allows you to create a few different "flags" that you can assign to emails and name them as you want. It adds an icon next to the email so you can easily pick it out in your list. As most of my tasks come in via emails, I use them for prioritising emails. So I have created flags for "High", "Medium" and "Low". I can then label the email accordingley.</li>
<li><strong>Multiple Inboxes </strong>- this allows you to create different "views" that conform to a certain rule you setup. They could be a view of all your labels, or as I do, a view of your Super Stars. So I have setup views of my High, Medium and Low importance emails, from top to bottom. In effect my Super Stars and Multiple Inboxes means I can use my email inbox as my To Do list.</li>
</ul>
<p class="h2">How Do I Get GMail?</p>
<p>You need a Google Account, so sign up for a Google Account and get your GMail at <a href="http://mail.google.com/mail/" target="_blank" rel="noopener noreferrer">http://mail.google.com/mail/</a>. Having a Google Account allows you to access many other free tools Google provides such as Google Documents and Google Calendar.</p>
<p class="h2">Are There Alternatives?</p>
<p>Here are a list of other providers of free, online browser based email accounts:-</p>
<ul>
<li><a href="http://uk.mail.yahoo.com/" target="_blank" rel="noopener noreferrer">Yahoo</a></li>
<li><a href="http://home.live.com/" target="_blank" rel="noopener noreferrer">Hotmail/Windows Live</a></li>
<li><a href="http://www.mail.com/learnmore.aspx" target="_blank" rel="noopener noreferrer">Mail.com</a></li>
</ul>
<p class="h2">More Information</p>
<p>You can find more information from Google at <a href="http://mail.google.com/mail/help/intl/en-GB/about.html" target="_blank" rel="noopener noreferrer">http://mail.google.com/mail/help/intl/en-GB/about.html</a>.</p>`,
        date: '2009-12-22',
        category: 'Emails'
    },
    {
        slug: 'google-apps-free-online-email-calendar-and-documents',
        title: 'Google Apps – Free Online Email, Calendar and Documents',
        excerpt: 'Google Apps (or Google Products) is a collection of free, browser based, online tools from Google that can dramatically improve your productivity and save costs by replacing commercial systems like Microsoft Outlook. A list of all the free free products Google provide can be found at http://www.google.co.uk/intl/en/options/. To access all these tools all you need is a free Google account.',
        content: `<p>Google Apps (or Google Products) is a collection of free, browser based, online tools from Google that can dramatically improve your productivity and save costs by replacing commercial systems like Microsoft Outlook. A list of all the free products Google provide can be found at <a href="http://www.google.co.uk/intl/en/options" target="_blank" rel="noopener noreferrer">http://www.google.co.uk/intl/en/options</a>/. To access all these tools all you need is a free Google account.</p>
<p>I have written a small series of blogs aimed at describing three of the most common Google products for business users:-</p>
<ol>
<li><a href="/blog/benefits-of-google-mail-gmail-free-web-based-email-service-with-massive-sto">Google Mail (GMail)</a></li>
<li><a href="/blog/google-documents-free-word-processing-spreadsheets-and-more/">Google Documents</a></li>
<li><a href="/blog/google-calendar-organise-and-synchronise-your-schedule-online/">Google Calendar</a></li>
</ol>
<p><strong>Note</strong>: Although commonly referred to as Google Apps, Google Apps is in fact the above products commercially available for those wanting to access them through their own domain name, and increase storage space. The above products are in fact just &ldquo;Google products&rdquo; that are accessed through a free Google Account. I do not want to use the term Google products though as this may conflict with the Google Products Search via the Shopping link! So I refer to them as Google Apps.</p>`,
        date: '2009-12-22',
        category: 'Emails'
    },
    {
        slug: 'google-documents-free-word-processing-spreadsheets-and-more',
        title: 'Google Documents – Free Word Processing, Spreadsheets and More..',
        excerpt: 'Part 2 of my Google Apps Blog Series describes what Google Documents is and the benefit of using it over conventional office applications like Microsoft Office.',
        content: `<p>Part 2 of my <a href="/blog/google-apps-free-online-email-calendar-and-documents/">Google Apps Blog Series</a> describes what Google Documents is and the benefit of using it over conventional office applications like Microsoft Office.</p>
<p class="h2">What are Google Documents?</p>
<div id="contents_box"><strong>Google Apps Contents</strong><ol>
<li><a href="/blog/benefits-of-google-mail-gmail-free-web-based-email-service-with-massive-sto">Google Mail (GMail)</a></li>
<li><a href="/blog/google-documents-free-word-processing-spreadsheets-and-more/">Google Documents</a></li>
<li><a href="/blog/google-calendar-organise-and-synchronise-your-schedule-online/">Google Calendar</a></li>
</ol></div>
<p>Google Documents is a collection of basic office applications such as a Word processor and Spreadsheet available for free through your browser. A Google Account is needed. The documents can be access, saved, shared and edited all through your browser therefore providing a quick and convenient way to access documents anywhere at any time.</p>
<p class="h2">Why Should I Use Google Documents?</p>
<p>Here is a list of advantages of using Google Documents:-</p>
<ul>
<li><strong>Free </strong>- its a free service so you do not need to pay for expensive licenses</li>
<li><strong>Browser Based</strong> &ndash; you can access the applications through a browser so your documents are available anywhere at any time</li>
<li><strong>No Software Installation</strong> &ndash; the applications are dynamically run on Google Servers and fed through your browser, so no need to install software</li>
<li><strong>Open MS Documents</strong> &ndash; You can open Microsoft documents within Google Documents such as .doc, .docx and .xls files. Some formatting may be lost though.</li>
<li><strong>Share Documents</strong> &ndash; You can share document access (Read and/or Write) with other people to create better collaboration and save emailing different versions back and forth.</li>
<li><strong>Online Forms</strong> &ndash; You can create an online form using Spreadsheet to collect data and enter it into a spreadsheet.</li>
</ul>
<p class="h2">Are There Any Limitations?</p>
<p>At the time of writing the main limitation of Google Documents is<strong> Basic Functionality</strong>. You can only access basic functions in Documents and Spreadsheets such as text formatting, and cannot access more advanced features like formatting and aligning images. Therefore when opening MS documents that use advanced features, it is possible they will be removed in Google Documents.</p>
<p>Google Documents is therefore only good at basic Word processing and spreadsheets. You will still need a suitable Office application to do more advanced formatting.</p>
<p class="h2">How Do I Get Google Documents?</p>
<p>Sign up for a Google Account and Documents account at <a href="http://docs.google.com/" target="_blank" rel="noopener noreferrer">http://docs.google.com/</a></p>
<p class="h2">Are There Any Alternatives?</p>
<p>Yes, the following are common office applications you can use instead:-</p>
<ul>
<li><a href="http://office.microsoft.com/" target="_blank" rel="noopener noreferrer">Microsoft Office</a></li>
<li><a href="http://www.openoffice.org/" target="_blank" rel="noopener noreferrer">Open Office</a></li>
<li><a href="http://www-01.ibm.com/software/lotus/" target="_blank" rel="noopener noreferrer">Lotus</a></li>
</ul>
<p class="h2">More Information</p>
<p>Read more information from Google at <a href="http://docs.google.com/" target="_blank" rel="noopener noreferrer">http://docs.google.com/</a></p>`,
        date: '2009-12-22',
        category: 'Advice'
    },
    {
        slug: 'google-calendar-organise-and-synchronise-your-schedule-online',
        title: 'Google Calendar – Organise and Synchronise Your Schedule Online',
        excerpt: 'Part 3 of my Google Apps Blog Series describes what Google Calendar is and the benefit of using it over conventional calendar applications like Microsoft Outlook.',
        content: `<p>Part 3 of my <a href="/blog/google-apps-free-online-email-calendar-and-documents/">Google Apps Blog Series</a> describes what Google Calendar is and the benefit of using it over conventional calendar applications like Microsoft Outlook.</p>
<p class="h2">What is Google Calendar?</p>
<div id="contents_box"><strong>Google Apps Contents</strong><ol>
<li><a href="/blog/benefits-of-google-mail-gmail-free-web-based-email-service-with-massive-sto">Google Mail (GMail)</a></li>
<li><a href="/blog/google-documents-free-word-processing-spreadsheets-and-more/">Google Documents</a></li>
<li><a href="/blog/google-calendar-organise-and-synchronise-your-schedule-online/">Google Calendar</a></li>
</ol></div>
<p>Google Calendar is a free calendar system available through your browser.&nbsp; The Calendar can be accessed, saved, shared and edited all through your browser therefore providing a quick and convenient way to access your schedule anywhere at any time.</p>
<p class="h2">Why Should I Use Google Calendar?</p>
<p>Here is a list of advantages of using Google Documents:-</p>
<ul>
<li><strong>Free </strong>- its a free service so you do not need to pay for expensive licenses</li>
<li><strong>Browser Based</strong> &ndash; you can access the applications through a browser so your documents are available anywhere at any time</li>
<li><strong>No Software Installation</strong> &ndash; the calendar system is dynamically run on Google Servers and fed through your browser, so no need to install software</li>
<li><strong>Standard Calendar Functions</strong> &ndash; You still get all your usual calendar functions such as reminders, recurring appointments and more..</li>
<li><strong>Reminders </strong>- Pop Up and Email reminders can be sent to remind you of your appointments</li>
<li><strong>Synchronisation</strong> &ndash; One of the most useful features for me&hellip; the ability to synchronise your calendar with other applications such as Microsoft Outlook and mobile phones like the iPhone. Using my iPhone I can view my appointments and even create appointments on the go which then are added to my main Google Calendar. My iPhone can then remind me of upcoming appointments with pop ups and sound whilst I am away from my computer.</li>
<li><strong>Multiple Calendars</strong> &ndash; You can create multiple calendars for different things like Projects, or Personal</li>
<li><strong>Share and Collaborate </strong>- You can share calendar access (Read and/or Write) with other people to create better collaboration for team meetings and project schedules.</li>
</ul>
<p class="h2">How Do I Get Google Calendar?</p>
<p>Sign up for a Google Account and Calendar at <a href="http://www.google.com/calendar/" target="_blank" rel="noopener noreferrer">http://www.google.com/calendar/</a></p>
<p class="h2">Are There Any Alternatives?</p>
<p>Yes, the following are common calendar applications you can use instead:-</p>
<ul>
<li><a href="https://login.yahoo.com/config/login_verify2?.src=yc&amp;.intl" target="_blank" rel="noopener noreferrer">Yahoo</a></li>
<li><a href="http://www.microsoft.com/outlook/" target="_blank" rel="noopener noreferrer">Microsoft Outlook</a></li>
<li><a href="http://www.mozilla.org/projects/calendar/" target="_blank" rel="noopener noreferrer">Thunderbird</a> (Outlook alternative)</li>
</ul>
<p class="h2">More Information</p>
<p>Read more information from Google at <a href="http://www.google.com/calendar/" target="_blank" rel="noopener noreferrer">http://www.google.com/calendar/</a></p>`,
        date: '2009-12-22',
        category: 'Advice'
    },
    {
        slug: 'website-legal-requirements-7-the-eu-anti-spam-laws',
        title: 'Website Legal Requirements 7 – The EU Anti Spam Laws',
        excerpt: 'The seventh and last blog of my Website Legal Requirements series, explains how The EU Anti Spam Laws affect your email marketing and what you should do in order to comply.',
        content: `<p>The seventh and last blog of my <strong><strong>Website Legal Requirements</strong></strong> series, explains how <strong>The EU Anti Spam Laws</strong><strong> </strong> affect your email marketing and what you should do in order to comply.</p>
<p>&nbsp;</p>
<div id="contents_box"><strong>Legal Requirements Contents</strong><ol>
<li><a href="/blog/website-legal-requirements-1-company-information/" rel="bookmark">Company Information</a></li>
<li><a href="/blog/website-legal-requirements-2-web-accessibility-and-the-disability-discrimin" rel="bookmark">Web Accessibility and the Disability Discrimination Act</a></li>
<li><a href="/blog/website-legal-requirements-3-the-data-protection-act/" rel="bookmark">The Data Protection Act</a></li>
<li><a href="/blog/website-legal-requirements-4-consumer-protection-distance-selling-regulatio" rel="bookmark">Consumer Protection (Distance Selling) Regulations</a></li>
<li><a href="/blog/website-legal-requirements-5-electronic-commerce-regulations-ec-directive/" rel="bookmark">Electronic Commerce Regulations (EC Directive)</a></li>
<li><a href="/blog/website-legal-requirements-6-pci-dss/" rel="bookmark">PCI DSS</a></li>
<li><a href="/blog/website-legal-requirements-7-the-eu-anti-spam-laws" rel="bookmark">The EU Anti Spam Laws</a></li>
</ol></div>
<p>The <strong>Privacy and Electronic Communications Directive (E-Privacy Directive)</strong> is an EU directive on data protection and privacy in the digital age. Article 13(1) of the Directive prohibits the sending of unsolicited commercial communications by fax or e-mail or other electronic messaging systems such as SMS and MMS unless the prior consent of the addressee has been obtained (opt-in system).</p>
<p><em><strong>How Does This Affect My Website?</strong></em></p>
<p>Firstly, if you use your website forms to collect users email addresses which you then use to send marketing emails to, you must ensure the user is offered an opt-in option to receive your emails. Customers are exempt from this but need to be offered an opt-out option.</p>
<p>Secondly, if you have a database of emails you must ensure these people have opted in to receive your marketing emails. So for example, if you purchased a database of emails, you must ensure these poeple have initially given consent to pass their emails on to third parties.</p>
<p>Thirdly, if you use a email marketing or newsletter system, such as our Email Marketer, you must make sure opt-out instructions have been provided.</p>
<p><strong>Sources &amp; More Info</strong>:<br /> <a href="http://www.opsi.gov.uk/si/si2003/20032426.htm#22" target="_blank" rel="noopener noreferrer">http://www.opsi.gov.uk/si/si2003/20032426.htm#22</a><br /> <a href="http://en.wikipedia.org/wiki/Directive_on_Privacy_and_Electronic_Communications" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/Directive_on_Privacy_and_Electronic_Communications</a></p>`,
        date: '2009-10-05',
        category: 'Website Policy'
    },
    {
        slug: 'website-legal-requirements-6-pci-dss',
        title: 'Website Legal Requirements 6 – PCI DSS',
        excerpt: 'The sixth blog of my Website Legal Requirements series, explains how the Payment Card Industry Data Security Standard (PCI DSS) affects not only your E-Commerce site, but your website server too, and what you should do in order to comply.',
        content: `<p>The sixth blog of my <strong>Website Legal Requirements</strong> series, explains how the <strong>Payment Card Industry Data Security Standard (PCI DSS) </strong> affects not only your E-Commerce site, but your website server too, and what you should do in order to comply.</p>
<p>&nbsp;</p>
<div id="contents_box"><strong>Legal Requirements Contents</strong><ol>
<li><a href="/blog/website-legal-requirements-1-company-information">Company Information</a></li>
<li><a href="/blog/website-legal-requirements-2-web-accessibility-and-the-disability-discrimin">Web Accessibility and the Disability Discrimination Act</a></li>
<li><a href="/blog/website-legal-requirements-3-the-data-protection-act">The Data Protection Act</a></li>
<li><a href="/blog/website-legal-requirements-4-consumer-protection-distance-selling-regulatio">Consumer Protection (Distance Selling) Regulations</a></li>
<li><a href="/blog/website-legal-requirements-5-electronic-commerce-regulations-ec-directive">Electronic Commerce Regulations (EC Directive)</a></li>
<li><a href="/blog/website-legal-requirements-6-pci-dss">PCI DSS</a></li>
<li><a href="/blog/website-legal-requirements-7-the-eu-anti-spam-laws">The EU Anti Spam Laws</a></li>
</ol></div>
<p>The <strong>Payment Card Industry Data Security Standard (PCI DSS) </strong>was created to help prevent credit card fraud with organisations that process credit or debit card payments. It ensures controls around data are increased and reduces exposure to compromise. The standard applies to all organisations which hold, process, or pass cardholder information from any card branded with the logo of one of the card brands.</p>
<p>The industry standard PCI DSS, includes 12 key requirements for organisations that accept or processes card payments:</p>
<ol>
<li>Install and maintain a firewall configuration to protect data</li>
<li>Do not use vendor-supplied defaults for passwords or other security parameters</li>
<li>Protect stored data</li>
<li>Encrypt the transmission of cardholder data and sensitive information</li>
<li>Use and regularly update anti-virus software</li>
<li>Develop and maintain securer systems and applications</li>
<li>Restrict access to data by business need-to-know</li>
<li>Assign a unique ID to each person with computer access</li>
<li>Restrict physical access to cardholder data</li>
<li>Track and monitor all access to network resources and cardholder data</li>
<li>Regularly test security systems and processes</li>
<li>Maintain a policy that addresses information security</li>
</ol>
<p><em><strong>How Does This Affect My Website?</strong></em></p>
<p>It is not only your website that are affected, but the server your website is hosted on also. You should check with your web hosting developer and e-commerce system provider that:</p>
<ul>
<li>you have a suitable <strong>firewall </strong>on the server</li>
<li>system passwords are <strong>secure</strong></li>
<li>if you save credit/debit card that it is protected, the website have a suitable <strong>SSL certificate</strong> to <strong>encrypt </strong>transmitted data</li>
<li>the server uses <strong>anti virus</strong> software</li>
<li>the systems are <strong>secure and access</strong> is only granted to those who need it.</li>
</ul>
<p><strong>Sources &amp; More Info</strong>:<br /> <a href="https://www.pcisecuritystandards.org/" target="_blank" rel="noopener noreferrer">https://www.pcisecuritystandards.org/</a><br /> <a href="http://www.visaeurope.com/aboutvisa/security/ais/requirements.jsp" target="_blank" rel="noopener noreferrer">http://www.visaeurope.com/aboutvisa/security/ais/requirements.jsp</a><br /> <a href="http://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard</a></p>`,
        date: '2009-10-05',
        category: 'Website Policy'
    },
    {
        slug: 'website-legal-requirements-5-electronic-commerce-regulations-ec-directive',
        title: 'Website Legal Requirements 5 – Electronic Commerce Regulations (EC Directive)',
        excerpt: 'The fifth of my Website Legal Requirements blog series, explains how the Electronic Commerce Regulations (EC Directive) affects your E-Commerce website and what you should do in order to comply.',
        content: `<p>The fifth of my <strong><strong>Website Legal Requirements</strong></strong> blog series, explains how the <strong>Electronic Commerce Regulations (EC Directive)</strong> affects your E-Commerce website and what you should do in order to comply.</p>
<p>&nbsp;</p>
<div id="contents_box"><strong>Legal Requirements Contents</strong><ol>
<li><a href="/blog/website-legal-requirements-1-company-information">Company Information</a></li>
<li><a href="/blog/website-legal-requirements-2-web-accessibility-and-the-disability-discrimin">Web Accessibility and the Disability Discrimination Act</a></li>
<li><a href="/blog/website-legal-requirements-3-the-data-protection-act">The Data Protection Act</a></li>
<li><a href="/blog/website-legal-requirements-4-consumer-protection-distance-selling-regulatio">Consumer Protection (Distance Selling) Regulations</a></li>
<li><a href="/blog/website-legal-requirements-5-electronic-commerce-regulations-ec-directive">Electronic Commerce Regulations (EC Directive)</a></li>
<li><a href="/blog/website-legal-requirements-6-pci-dss">PCI DSS</a></li>
<li><a href="/blog/website-legal-requirements-7-the-eu-anti-spam-laws">The EU Anti Spam Laws</a></li>
</ol></div>
<p>The <strong>EU Ecommerce Directive</strong> is a policy for online service providers to ensure that customers can easily and quickly contact the service provider.</p>
<p><em><strong>How Does This Affect My Website?</strong></em></p>
<p>The following information must be shown on your website:</p>
<ul>
<li>You should display the name of your business.</li>
<li>We recommend you display your company registration number or proprietor&rsquo;s name (as you would in a letter).</li>
<li>You should show your geographic address (street number etc, not just a PO box).</li>
<li>You should show your contact information such as phone number and email address.</li>
<li>You should show your VAT number if you are VAT registered.</li>
<li>Refer to trade or professional recognition schemes, with registration number, if applicable.</li>
<li>Provide clear information on price, tax and delivery.</li>
<li>Show clear Terms and Conditions and acknowledge orders.</li>
</ul>
<p><strong>Sources &amp; More Info</strong>:<br /> <a href="http://www.opsi.gov.uk/si/si2002/20022013.htm" target="_blank" rel="noopener noreferrer">http://www.opsi.gov.uk/si/si2002/20022013.htm</a><br /> <a href="http://en.wikipedia.org/wiki/Electronic_Commerce_Regulations_2002" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/Electronic_Commerce_Regulations_2002</a></p>`,
        date: '2009-10-05',
        category: 'Website Policy'
    },
    {
        slug: 'website-legal-requirements-4-consumer-protection-distance-selling-regulatio',
        title: 'Website Legal Requirements 4 – Consumer Protection (Distance Selling) Regulations',
        excerpt: 'The fourth blog of my Website Legal Requirements series, explains how the Consumer Protection (Distance Selling) Regulations affects your E-Commerce site and what you should do in order to comply.',
        content: `The fourth blog of my <strong><strong>Website Legal Requirements</strong></strong> series, explains how the <strong>Consumer Protection (Distance Selling) Regulations</strong> affects your E-Commerce site and what you should do in order to comply.
<div id="contents_box">

<strong>Legal Requirements Contents</strong>
<ol>
 	<li><a href="/blog/website-legal-requirements-1-company-information">Company Information</a></li>
 	<li><a href="/blog/website-legal-requirements-2-web-accessibility-and-the-disability-discrimin">Web Accessibility and the Disability Discrimination Act</a></li>
 	<li><a href="/blog/website-legal-requirements-3-the-data-protection-act">The Data Protection Act</a></li>
 	<li><a href="/blog/website-legal-requirements-4-consumer-protection-distance-selling-regulatio">Consumer Protection (Distance Selling) Regulations</a></li>
 	<li><a href="/blog/website-legal-requirements-5-electronic-commerce-regulations-ec-directive">Electronic Commerce Regulations (EC Directive)</a></li>
 	<li><a href="/blog/website-legal-requirements-6-pci-dss">PCI DSS</a></li>
 	<li><a href="/blog/website-legal-requirements-7-the-eu-anti-spam-laws">The EU Anti Spam Laws</a></li>
</ol>
</div>
Distance Selling Regulations give protection to consumers who shop by phone, mail order, via the Internet or digital TV. The protection includes:
<ul>
 	<li>The right to receive clear information about goods and services before deciding to buy;</li>
 	<li>Confirmation of this information in writing;</li>
 	<li>A cooling off period of seven working days in which the consumer can withdraw from the contract;</li>
 	<li>Protection from credit card fraud.</li>
</ul>
<em><strong>How Does This Affect My Website?</strong></em>

The following information must be shown on your website, and this is commonly done via pages such as <strong><em>Terms &amp; Conditions</em></strong>, <strong><em>Delivery Details</em></strong>, <strong><em>Returns Policy</em></strong> etc.
<ol>
 	<li>Identity of the supplier and address whereby payment is upfront.</li>
 	<li>A description of the service</li>
 	<li>The contract price inclusive of taxes</li>
 	<li>Delivery Cost (if applicable)</li>
 	<li>Payment and delivery arrangement</li>
 	<li>Notification of the right of cancellation (reg 13 of these Regulations)</li>
 	<li>The cost of the means of communication by which the contract is to be concluded (e.g. premium rate phone numbers)</li>
 	<li>The period for which the terms are available</li>
 	<li>Minimum duration of the contract, where it is not of one-off performance</li>
</ol>
<strong>Sources &amp; More Info</strong>:
<a href="https://www.gov.uk/government/organisations/department-for-business-energy-and-industrial-strategy" target="_blank" rel="noopener noreferrer">https://www.gov.uk/government/organisations/department-for-business-energy-and-industrial-strategy</a>
<a href="http://en.wikipedia.org/wiki/Consumer_Protection_%28Distance_Selling%29_Regulations" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/Consumer_Protection_%28Distance_Selling%29_Regulations</a>`,
        date: '2009-10-05',
        category: 'Website Policy'
    },
    {
        slug: 'website-legal-requirements-3-the-data-protection-act',
        title: 'Website Legal Requirements 3 – The Data Protection Act',
        excerpt: 'In the third part of my Website Legal Requirements series, I explain how the Data Protection Act affects your website and what you need to do to adhere to it.',
        content: `In the third part of my <strong><strong>Website Legal Requirements</strong></strong> series, I explain how the <strong>Data Protection Act</strong> affects your website and what you need to do to adhere to it.

&nbsp;
<div id="contents_box">

<strong>Legal Requirements Contents</strong>
<ol>
 	<li><a href="/blog/website-legal-requirements-1-company-information">Company Information</a></li>
 	<li><a href="/blog/website-legal-requirements-2-web-accessibility-and-the-disability-discrimin">Web Accessibility and the Disability Discrimination Act</a></li>
 	<li><a href="/blog/website-legal-requirements-3-the-data-protection-act">The Data Protection Act</a></li>
 	<li><a href="/blog/website-legal-requirements-4-consumer-protection-distance-selling-regulatio">Consumer Protection (Distance Selling) Regulations</a></li>
 	<li><a href="/blog/website-legal-requirements-5-electronic-commerce-regulations-ec-directive">Electronic Commerce Regulations (EC Directive)</a></li>
 	<li><a href="/blog/website-legal-requirements-6-pci-dss">PCI DSS</a></li>
 	<li><a href="/blog/website-legal-requirements-7-the-eu-anti-spam-laws">The EU Anti Spam Laws</a></li>
</ol>
</div>
<strong>The Data Protection Act</strong> defines UK law on the processing of people’s data and is the main piece of legislation that governs the protection of personal data in the UK. It gives people the right to know what information is held about them and provides a framework to ensure that personal information is handled properly.

The Act states that anyone who processes personal information must comply with eight principles, which make sure that personal information is:
<ul>
 	<li>Fairly and lawfully processed</li>
 	<li>Processed for limited purposes</li>
 	<li>Adequate, relevant and not excessive</li>
 	<li>Accurate and up to date</li>
 	<li>Not kept for longer than is necessary</li>
 	<li>Processed in line with your rights</li>
 	<li>Secure</li>
 	<li>Not transferred to other countries without adequate protection</li>
</ul>
It also provides individuals with important rights, including the right to find out what personal information is held on computer and most paper records.

<em><strong>How Does This Affect My Website?</strong></em>

If your website collects users data, even a simple enquiry form asking for Name, Email and Phone Number, you should include a <strong>Privacy Policy</strong> that informs website visitors how you retain, process, disclose and purge their data in line with the requirements above.

<strong>Sources &amp; More Info</strong>:
<a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">https://ico.org.uk/</a>
<a href="http://en.wikipedia.org/wiki/Data_Protection_Act_1998" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/Data_Protection_Act_1998</a>
<a href="http://en.wikipedia.org/wiki/Privacy_policy" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/Privacy_policy</a>`,
        date: '2009-10-05',
        category: 'Website Policy'
    },
    {
        slug: 'website-legal-requirements-2-web-accessibility-and-the-disability-discrimin',
        title: 'Website Legal Requirements 2 – Web Accessibility and the Disability Discrimination Act',
        excerpt: 'The second part of my Website Legal Requirements series, explains how the Disability Discrimination Act affects your website and what your website requires in order to conform.',
        content: `<p>The second part of my <strong><strong>Website Legal Requirements</strong></strong> series, explains how the <strong>Disability Discrimination Act</strong> affects your website and what your website requires in order to conform.</p>
<p>&nbsp;</p>
<div id="contents_box"><strong>Legal Requirements Contents</strong><ol>
<li><a href="/blog/website-legal-requirements-1-company-information">Company Information</a></li>
<li><a href="/blog/website-legal-requirements-2-web-accessibility-and-the-disability-discrimin">Web Accessibility and the Disability Discrimination Act</a></li>
<li><a href="/blog/website-legal-requirements-3-the-data-protection-act">The Data Protection Act</a></li>
<li><a href="/blog/website-legal-requirements-4-consumer-protection-distance-selling-regulatio">Consumer Protection (Distance Selling) Regulations</a></li>
<li><a href="/blog/website-legal-requirements-5-electronic-commerce-regulations-ec-directive">Electronic Commerce Regulations (EC Directive)</a></li>
<li><a href="/blog/website-legal-requirements-6-pci-dss">PCI DSS</a></li>
<li><a href="/blog/website-legal-requirements-7-the-eu-anti-spam-laws">The EU Anti Spam Laws</a></li>
</ol></div>
<p>The <a href="http://www.w3.org/" target="_blank" rel="noopener noreferrer">World Wide Web Consortium (W3C)</a> is an international consortium where member organizations, full-time staff, and the public work together to develop Web standards. They have developed a set of standards to ensure websites are built to best and common practices which also ensure people with disabilities can use and operate websites.</p>
<p>They have split the <strong>Web Accessibility Guidelines</strong> into three &ldquo;checkpoints&rdquo;.</p>
<ul>
<li><em><strong>Priority 1</strong>: A Web content developer must satisfy this checkpoint. Otherwise, one or more groups will find it impossible to access information in the document. Satisfying this checkpoint is a basic requirement for some groups to be able to use Web documents. </em></li>
<li><em><strong>Priority 2</strong>: A Web content developer should satisfy this checkpoint. Otherwise, one or more groups will find it difficult to access information in the document. Satisfying this checkpoint will remove significant barriers to accessing Web documents.</em></li>
<li><em><strong>Priority 3</strong>: A Web content developer may address this checkpoint. Otherwise, one or more groups will find it somewhat difficult to access information in the document. Satisfying this checkpoint will improve access to Web documents. </em></li>
</ul>
<p>The UK Government and the RNIB both advise that your website must satisfy <strong>Priority 1</strong> of guidelines and should satisfy <strong>Priority 2</strong> guidelines. If the website is built to these guidelines then it allows people with disabilities to be able to use and operate your website. For example, a Screen Reader could be used to read out website content to a visually impaired user if the guidelines are followed.</p>
<p>The guidelines are not only for the web developer to take into account when building the site, but also need to be considered if content is added by other users using a content manager. For example, images added to the site should have the ALT attribute added to provide alternate text that a screen reader can read out. This is an example of one of the guidelines and with a content manager can easily be overlooked by the website administrator.</p>
<p>If you want to ensure your website conforms then contact your web developer for more information.</p>
<p><em><strong>How Does This Affect My Website?</strong></em></p>
<p>Your website should confirm to at least <strong>Priority 1</strong> of the <a href="http://www.w3.org/" target="_blank" rel="noopener noreferrer">W3C</a> Guidelines (or at least show that you have done all you can to adhere to it).</p>
<p><strong>Sources &amp; More Info</strong>:<br /> <a href="http://www.w3.org/" target="_blank" rel="noopener noreferrer">http://www.w3.org/</a><br /> <a href="http://en.wikipedia.org/wiki/Web_accessibility" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/Web_accessibility</a></p>`,
        date: '2009-10-05',
        category: 'Website Policy'
    },
    {
        slug: 'website-legal-requirements-1-company-information',
        title: 'Website Legal Requirements 1 – Company Information',
        excerpt: 'In the first part of my Website Legal Requirements series, I explain what Company Information you must display on your company website.',
        content: `In the first part of my <strong>Website Legal Requirements</strong> series, I explain what <strong>Company Information</strong> you must display on your company website.

&nbsp;
<div id="contents_box">

<strong>Legal Requirements Contents</strong>
<ol>
 	<li><a href="/blog/website-legal-requirements-1-company-information">Company Information</a></li>
 	<li><a href="/blog/website-legal-requirements-2-web-accessibility-and-the-disability-discrimin">Web Accessibility and the Disability Discrimination Act</a></li>
 	<li><a href="/blog/website-legal-requirements-3-the-data-protection-act">The Data Protection Act</a></li>
 	<li><a href="/blog/website-legal-requirements-4-consumer-protection-distance-selling-regulatio">Consumer Protection (Distance Selling) Regulations</a></li>
 	<li><a href="/blog/website-legal-requirements-5-electronic-commerce-regulations-ec-directive">Electronic Commerce Regulations (EC Directive)</a></li>
 	<li><a href="/blog/website-legal-requirements-6-pci-dss">PCI DSS</a></li>
 	<li><a href="/blog/website-legal-requirements-7-the-eu-anti-spam-laws">The EU Anti Spam Laws</a></li>
</ol>
</div>
As from 1st January 2007 the following applies to <strong>Business Stationery (which includes Websites):</strong>

Whether in hard copy, electronic or any other form:
A company must state its name, in legible lettering, on the following -
<ul>
 	<li>all the company’s business letters, order forms;</li>
 	<li>all its notices and other official publications;</li>
 	<li>all bills of exchange, promissory notes, endorsements, cheques and orders for money or goods purporting to be signed by, or on behalf of, the company;</li>
 	<li>all its bills of parcels, invoices, receipts and letters of credit</li>
 	<li>on all its websites</li>
</ul>
On all of its business letters, order forms or any of the company’s web sites, the company must show in legible lettering –
<ul>
 	<li>its place of registration</li>
 	<li>registered number</li>
 	<li>its registered office address</li>
 	<li>and if it is being wound up, that fact</li>
</ul>
Whenever an email is used where its paper equivalent would be caught by the stationery requirements then that email is also subject to the requirements. The above also applies to Limited Liability Partnerships.

<em><strong>How Does This Affect My Website?</strong></em>

For a registered business, the website needs to display the <strong>business name</strong>, <strong>place of registration</strong>, <strong>registered number</strong>, its <strong>registered office address</strong> and if it is <strong>being wound up</strong>.

<strong>Sources &amp; More Info</strong>:
<a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" rel="noopener noreferrer">https://www.gov.uk/government/organisations/companies-house</a>`,
        date: '2009-10-05',
        category: 'Website Policy'
    },
    {
        slug: 'interspire-email-marketer-and-joomla-aec-subscription-manager-integration',
        title: 'Interspire Email Marketer and Joomla AEC Subscription Manager Integration',
        excerpt: 'We’ve finished developing an integration between the popular AEC Subscription Manager for the Joomla content management system and the cutting edge Interspire Email Marketer. Using AEC’s Micro Integrations we have developed the process for when a user joins a subscription plan they are added to a contact list of choice and when they expire are removed from the contact list. With this integration it now means one of the most popular and feature rich newsletter systems can be used in a fully automated way with the leading Joomla content management system’s AEC Subscription component.',
        content: `<p>We&rsquo;ve finished developing an integration between the popular <strong>AEC Subscription Manager</strong> for the Joomla content management system and the cutting edge <strong>Interspire Email Marketer</strong>. Using AEC&rsquo;s Micro Integrations we have developed the process for when a user joins a subscription plan they are added to a contact list of choice and when they expire are removed from the contact list. With this integration it now means one of the most popular and feature rich newsletter systems can be used in a fully automated way with the leading Joomla content management system&rsquo;s AEC Subscription component.</p>
<p>&nbsp;</p>
<p class="h2">Advantages of Integrating Joomla AEC Subscription Manager With Interspire Email Marketer</p>
<ul>
<li>Fully Automated, users are subscribed and unsubscribed in line with subscription plans</li>
<li>Eliminates the need to manually transfer contact data everytime a newsletter is to be sent</li>
<li>The more powerful and feature rich Interspire Email Marketing newsletter system can be used over the less functional Joomla newsletter components.</li>
</ul>
<p>The system is designed for bespoke integration for specific customer needs and not &ldquo;plug and play&rdquo; so <a href="/contact-us" target="_blank" rel="noopener noreferrer">contact us</a> if you would like to find out more.</p>`,
        date: '2009-08-26',
        category: 'Design/Development'
    },
    {
        slug: 'domain-name-scams-scare-and-renewal-tactics-for-domain-registrations',
        title: 'Domain Name Scams – Scare and Renewal Tactics for Domain Registrations',
        excerpt: 'I have many customers asking for advice on emails, letters and phone calls they receive from un-heard of companies offering domain name registrations and renewals. They are mostly scams and not legitimate, so do not take any action otherwise it could cost you a lot of money, or worse, the loss in your domain name. This blog explains the popular scams domain name owners will receive.',
        content: `I have many customers asking for advice on emails, letters and phone calls they receive from un-heard of companies offering domain name registrations and renewals. They are mostly scams and not legitimate, so do not take any action otherwise it could cost you a lot of money, or worse, the loss in your domain name. This blog explains the popular scams domain name owners will receive.
<p class="h2">What is the Domain Name Scam?</p>
If you have registered a new domain name and/or have a well indexed site, it is likely at some point you will receive an email or letter from a company you have never heard of trying to sell domain name registrations and renewals to you. There are two common types of scam:-
<h3><em>1. The Scare Tactic</em></h3>
The email or letter will state that another company is trying to buy other domain names that are the same as yours but with different extensions. For example, if you own <strong>yourdomain.co.uk</strong>, the letter, email or phone call will state someone is truing to buy <strong>yourdomain.com, </strong><strong>yourdomain.net,</strong><strong> yourdomain.biz, </strong><strong>yourdomain.org</strong> etc. etc. They will state that before they register the domains for their client, they researched your domain name to find you actually own it and to offer the sale to you first rather then their client. If you decline they will sell the domains to their client. This sounds quite scary doesn’t it! How awful would it be that someone else owns a lot of domain names for your company name, but you only have the .co.uk, and your legitimate and they are not?

<strong>Do not pay attention to these warnings, they are scams!</strong>

The reason for this scare tactic is so you will quickly snap up these domains using the company that warned you, hence making a nice sale for that company. Sometimes they even recommend a 10 year purchase making them hundreds of pounds in total.

Domain name registrations are completely automated with the leading domain name registration companies and they do not check if a similar domain is taken. Therefore anyone can buy any domain if it is not registered regardless if someone already owns the same or similar name. Nobody would even use a company that manually checks if other similar  oe same domains arer registered who then contact those owners to warn them. If someone wanted to register the available domains that are the same as yours, they can do it.

You should still make the decision whether you want to register the other domains. Many companies register at least a few such as the .co.uk, .com and .net maybe to be sure no one else can buy them. But the more domains you register the more costly it becomes. If you do decide to register a few others, do not use the company that have just contacted you to warn you. Use a legitimate domain name registration company who do not use such scare tactics to make sales. Some good companies would be <a href="http://www.1and1.co.uk/" target="_blank" rel="noopener noreferrer">www.1and1.co.uk</a>, <a href="http://www.123-reg.co.uk/" target="_blank" rel="noopener noreferrer">www.123-reg.co.uk</a>k and <a href="http://www.ukreg.co.uk/" target="_blank" rel="noopener noreferrer">www.ukreg.co.uk</a>.

<em><strong>2. The Renewal / Transfer Request Deceipt</strong></em>

The second most popular one I receive is a company stating you need to renew your domain name as it’s due to expire (which it could very well be) and to complete the form with payment so your domain name is renewed. In fact what you are doing is transferring your domain name to that provider so again they make a nice sale. It is deceiving as reading the letter closely will in fact state you are transferring, but they make it sound you are just renewing your domain name.

<strong>Do not pay attention to this either, it is also a scam!</strong>

Generally the letters I get are from the <strong>Domains Registry of America</strong>. Only renew your domain name with the company that you registered with, unless you really do want to move it to someone else.

By the way… Your domain name should be setup for <strong>automated renewal</strong>. This ensures it will never expire. All the leading domain registration companies offer this so make sure you have it.
<p class="h2">Are There Other Scams?</p>
Yes, there would be other. The above are the most common ones. I also receive scams on the following:-

<em><strong>1. Community Trademark Registration Invoices</strong></em>

If you register a Trademark you may receive an invoice for quite a lot of money to register the Community Trademark equivalent. Do not pay attention unless you do want the Community Trademark, but even then do it through the <a href="https://www.gov.uk/government/organisations/intellectual-property-office" target="_blank" rel="noopener noreferrer">https://www.gov.uk/government/organisations/intellectual-property-office</a> or the company you used to register the original trademark.

<em><strong>2. Web Directory Invoices</strong></em>

You may receive an invoice to be listed in a web directory you never heard of. You can decide to pay and be listed, but first check if you really want to. Most web directories are no good, they do not show in results on search engines. If Google and other search engines consider the site to be a bad, spam or low ranked site, then having your site listed on there will negatively affect your site also. My advice is search Google for certain keywords for your business and the Web Directories that do appear are the ones that you should be listed on, not the ones you cannot find. Again, its a nice scam.

If I receive any others I will add them here.
<p class="h2">What if I am Not Sure if It is a Scam Or Not?</p>
Just <a href="/contact-us" target="_blank" rel="noopener noreferrer">drop me an email or call me</a> with the details and I can help you decide whether it’s a scam and whether you do want to renew more domain names.`,
        date: '2009-08-12',
        category: 'Hosting'
    },
    {
        slug: 'joomla-images-and-robots-txt-be-sure-google-and-other-search-engines-can-in',
        title: 'Joomla Images and Robots.txt – Be Sure Google and Other Search Engines Can Index Them',
        excerpt: 'By default Joomla’s robots.txt file includes a line to disallow search engines indexing your images folder. This means the images on your Joomla site will not be indexed in Google and other search engines Images results. Here’s how to allow images to be indexed.',
        content: `<p>By default Joomla&rsquo;s robots.txt file includes a line to disallow search engines indexing your images folder. This means the images on your Joomla site will not be indexed in Google and other search engines Images results. Here&rsquo;s how to allow images to be indexed.</p>
<p class="h2">What is the Robots.txt File</p>
<p>The robots.txt file which should be located in your website root folder provides search engines, and other &ldquo;robots&rdquo; what not to index and other instructions on your website. You can use it to specify select search engines and bots or all of them, and tell them what directories and files to index or not. For example, the following robots.txt file is for ALL search engines and bots (indicated with <code>User-agent: *</code>) and states to &ldquo;Disallow&rdquo; indexing of the cgi-bin, images, tmp and private folders:-</p>
<p><code>User-agent: *<br /> Disallow: /cgi-bin/<br /> Disallow: /images/<br /> Disallow: /tmp/<br /> Disallow: /private/</code></p>
<p>Using the above code in the robots.txt file you can define what folders and files you want search engines and bots to index or not on your site. More information on the robots.txt file can be found here <a href="http://en.wikipedia.org/wiki/Robots_exclusion_standard" target="_blank" rel="noopener noreferrer">http://en.wikipedia.org/wiki/Robots_exclusion_standard</a>.</p>
<p class="h2">How to Allow Images to Be Indexed</p>
<p>By default Joomla adds the <code>Disallow: /images/</code> line to the robotos.txt file which is very bad if your Joomla site is used as a photo gallery system.&nbsp; So to be sure your images are indexed, download the robots.txt file, edit it and delete this line, then save and re-upload. Without this line search engines and bots are free to index your images folder.</p>
<p class="h2">What About Images within Components like Virtuemart or a Photo Gallery System?</p>
<p>Some components may store their images within the component directory itself. The robots.txt file also disallows indexing of the components folder where the component images directory would be. So there is a little more work involved in allowing this&hellip; you have three main options:-</p>
<ol>
<li>Remove the Disallow: /components/ line, and re-insert Disallow: /each_componet_path/ except the directory where the images are. This is long winded, you may have many lines and have to add them in when you add new components</li>
<li>Some components may allow you change the images directory, so see if you can change it to within the /images/ folder</li>
<li>Some search engines, noticeably Google, allow to use the Allow: directive. So after all your Disallow&rsquo;s, insert an Allow: line to the folder path where the component images are. Note: this will only work on some Search Engines like google that support it. But hey, Google is the most important right!</li>
</ol>`,
        date: '2009-08-12',
        category: 'SEO'
    },
    {
        slug: 'segment-your-email-contact-list-to-target-specific-contacts',
        title: 'Segment Your Email Contact List to Target Specific Contacts',
        excerpt: 'Creating segments in your contact list allows you to define sub-lists of your contacts filtered by specific criteria such as age, location, product or service etc. This allows you to have one main list but send newsletters to specific contacts matching your criteria. The segments should be stored for quick access thus eliminating the time to manually choose contacts to email. This blog explains segments in more detail.',
        content: `<p>Creating segments in your contact list allows you to define sub-lists of your contacts filtered by specific criteria such as age, location, product or service etc. This allows you to have one main list but send newsletters to specific contacts matching your criteria. The segments should be stored for quick access thus eliminating the time to manually choose contacts to email. This blog explains segments in more detail.</p>`,
        date: '2009-08-09',
        category: 'Emails'
    },
    {
        slug: 'setup-email-auto-responders-to-improve-your-email-marketing-strategy',
        title: 'Setup Email Auto Responders to Improve Your Email Marketing Strategy',
        excerpt: 'Autoresponders are an effective and powerful method of automatically sending email newsletters regularly to subscribers to your newsletter system without you doing anything apart from pre-writing the newsletters in the first place. The regular emailing ensures your products and services are communicated to subscribers automatically over a time period with the intention of increasing enquiries and sales.This blog explains what Autoreponders are.',
        content: `<p>Autoresponders are an effective and powerful method of automatically sending email newsletters regularly to subscribers to your newsletter system without you doing anything apart from pre-writing the newsletters in the first place. The regular emailing ensures your products and services are communicated to subscribers automatically over a time period with the intention of increasing enquiries and sales.This blog explains what Autoreponders are.</p>
<p class="h2">What is An Autoresponder?</p>
<p>An auto-responder is an email sent to a subscriber who signs up to your list after a certain time period. For example, one day, one week or one month after a user subscribes, a pre-created email can be sent to them automatically. You should be able to create unlimited auto responders to be sent at different time periods thus allowing you to create a fully automated regular mailing to subscribers without doing a thing. Example usages could be as follows, each one providing an incentive for people to sign up to your contact list:-</p>
<p class="h2">What Are The Benefits of Sending Autoresponders?</p>
<p>First, they will be a series of automated emails sent out to new subscribers at specified intervals which ensures you keep in regular communication automatically therefore saving you a lot of time.</p>
<p>Secondly, your emails should not only give away useful information the reader will be interested in (see below for ideas) but include links to your own website, products and services that they could benefit from.</p>
<p>The intention is via the automated emails you are potential selling your products and services over the auto responder time period.</p>
<p>The combination of both the above means subscribers will regularly receive interesting newsletters from you, with information or links to your products and services (which hopefully have done a good job in selling in the email), resulting in increased enquiries and sales throughout the autoresponder period, without you having to manually send anything. It&rsquo;s an effective and automated marketing strategy via email.</p>
<p class="h2">What Autoresponders Could I Create?</p>
<p>It depends on your business products and services and what information you want to give away in order to increase your subscribers, but here are a few ideas to get you started:-</p>
<ol>
<li><strong>Online e-Courses, Lessons or Guides</strong>: Offer a series of courses or lessons about your products or services with brief course sent per day or per week. For example &ldquo;Sign Up to Our 10 Step Email Guide to Utilising Our Product Effectively&rdquo;</li>
<li><strong>Monthly Hints &amp; Tips</strong>: Pre-create 12 newsletters about hints and tips associated with your products or services and send one every month after a user signs up for a year.</li>
<li><strong>Previous Newsletters, if applicable</strong>: Perhaps you have written many newsletters in the past which would still be relevant. Create them as auto responders so new sign ups receive them and don&rsquo;t miss out.</li>
</ol>
<p class="h2">What Next? How Can I Send Autoresponders?</p>
<p>You will need an effective Newsletter system that allows subscribers to sign up to your newsletters which sends autoresponders to these new subscribers.</p>
<p>See <strong><a href="/blog/email-newsletters-keep-your-contacts-and-customers-interested-with-exciting">this blog</a></strong> for more information on Newsletter Systems or <strong><a href="/contact-us" target="_blank" rel="noopener noreferrer">contact us</a></strong> for more information:<br /> <strong><a href="/blog/email-newsletters-keep-your-contacts-and-customers-interested-with-exciting">Email Newsletters &ndash; Keep Your Contacts and Customers Interested with Exciting Newsletters by Email</a></strong></p>`,
        date: '2009-08-08',
        category: 'Emails'
    },
    {
        slug: 'email-newsletters-keep-your-contacts-and-customers-interested-with-exciting',
        title: 'Email Newsletters – Keep Your Contacts and Customers Interested with Exciting Newsletters by Email',
        excerpt: 'Building up a contact and customer base is vital in running a successful business, but only if you use it correctly. One way of utilising your contact database is sending Email Newsletters to increase interest, read rates and click throughs and ultimately increased sales. This blog explains what Email Newsletters and and the benefits of sending them.',
        content: `Building up a contact and customer base is vital in running a successful business, but only if you use it correctly. One way of utilising your contact database is sending <strong>Email Newsletters</strong> to increase interest, read rates and click throughs and ultimately increased sales. This blog explains what <strong>Email Newsletters</strong> and and the benefits of sending them.

&nbsp;

Generally the database of customers and potential customers would be sent paper based newsletters, catalogues, brochures, sales information and any other documents by post with the intention of increasing sales. This of course becomes a timely and costly exercise to print and post each item, and on a regular basis the cost and time can be quite significant. So why not replace, or at least compliment, your offline marketing strategy with an <strong>online email based strategy</strong> too? With the right tools your paper based newsletter, catalogue, brochure or anything can easily be created for online viewing and sent direct to the recipients inbox saving a lot of time and money. If prepared and sent correctly, delivered direct to their inbox can increase interest, enquiries and ultimately sales.
<p class="h2">What is an Email Newsletter?</p>
An email newsletter is the general term used for emails sent that are created in web page style with text formatting and colours, images, hyperlinks and even tabular layouts such as columns and rows. Basically, making your emails look like a web page. The email does not have to be a “News-letter” but can be anything you like, although they are generally used to send News information to subscribers that may include new products, special offers, company news, sales information and more.
<p class="h2">Why Should I Send an Email Newsletter?</p>

<h3><em>Web Page Style Emails to Increase Interest</em></h3>
The intention of the web page format is to make the email a lot more exciting than standard text. Having something like a “<strong>10% Off My Product</strong>” in big, coloured wording with an attractive image and hyperlinked to a website is generally more appealing that the message in plain text. An appealing Newsletter means it will be read by a lot more people, which in turn could increase more interest and ultimately lead to more enquiries and sales.
<h3><em>Brand Awareness and Recognition</em></h3>
The newsletter can also be designed with any logos, images and colours that your business uses and thus connecting your newsletters to your brand. This in turn increases brand awareness and recognition with your reader base.
<h3><em>Automated Subscriber Management</em></h3>
The right newsletter system would also include subscriber management in that subscribers can easily and automatically subscribe to newsletters via a form on your website, then also easily and automatically unsubscribe from future newsletters by clicking on a link in the email. No manual time need to be spent adding and removing contacts from any newsletter list, it is fully automated.
<h3><em>HTML Editor to Create the Layout</em></h3>
The right newsletter system would then also include a user friendly editor allowing you to easily create the formatting you need with buttons such as <strong>Bold</strong>, <em>Italic</em>, Underline, Insert Tables, Insert Hyperlinks, Insert Images and a lot more. Many of them even come with pre-designed templates to choose from to create the newsletter with little effort.
<h3><em>Open and Click Through Statistics</em></h3>
Email Statistics should also be included which would let you know who has read what and when and how many have opened the email allowing you to constantly improve your email newsletters to maximise read and click through rates.

Therefore the main advantages of using a newsletter system would be increasing read and click through rates with interesting web page style emails, increasing your brand awareness, providing an easy to use editor to create the newsletters, automated subscribe and unsubscribe management and email statistics allowing continuous improvement.
<p class="h2">How Do I Create and Send an Email Newsletter?</p>
Although it is possible to send a web page style newsletter using an email client like Outlook, it is not advisable due to the limited features this system provides. It is not meant for mass mailing nor has any of the features listed above. A dedicated newsletter system is usually required to send such newsletters with all the features needed for true newsletter and contact list management.

There are a few types of systems that can provide this service:-
<h3><em>1. Hosted</em></h3>
There are many providers out there that offer a newsletter service hosted on their own servers. You can sign up on their website, create your contact lists and subscribe forms, import your contacts, create your newsletter and send. The advantage of hosted solutions are you do not need to have your own system installed on your own server, so no need to get involved with any purchase, download and install. You can create the account quickly and easily and get started right away. Usually no setup fee is required (or a low fee), but a monthly payment is made based on the number of emails sent. The draw backs are the systems limit the number of emails sent with a tier pricing plan. The more emails you send the more it can cost. If you have thousands of contacts it can become very expensive, but with only a few contacts the cost can be reasonable. Another draw back is the supplier companies would be quite large, with a large customer base, so would offer a support service comparable to all large organisations with no flexibility for a tailored service to suit you.

A few popular hosted solutions would be:-
<ul>
 	<li><a href="http://www.mailchimp.com/" target="_blank" rel="noopener noreferrer">Mail Chimp</a></li>
 	<li><a href="http://www.constantcontact.com/" target="_blank" rel="noopener noreferrer">Constant Contact</a></li>
</ul>
<em>Advantages</em>
<ul>
 	<li>No software to purchase or setup</li>
 	<li>Quick account creation to start sending</li>
 	<li>Lower cost for low number and less frequent emailing</li>
</ul>
<em>Disadvantages</em>
<ul>
 	<li>No tailored solution for your needs</li>
 	<li>Large organisation, many customers to support</li>
 	<li>Higher cost for many and regular emailing</li>
</ul>
<h3><em>2. Self Hosted</em></h3>
Self Hosted newsletter systems are available to purchase, download and install on your own server. The advantage is you are not limited in any way, you can send as many emails as you want as often as you want with no increase in cost. This is because its your server, and if your server can handle the resources then you can do what you want. Usually a one of purchase is required for the software instead of a monthly fee based on the number of emails. So in the long run this solution would be more cost effective because no additional payment is required based on the number of emails sent. The draw back is of course the download and install. Generally a web developer or similar would be required to do this for you. You will also be responsible for managing your own server rather than relying on the newsletter provider. This therefore means there would be no or little support offered on using the system, other than from the software provider.

One of the leading Self Hosted Email Marketing systems is:-
<ul>
 	<li><a href="http://www.interspire.com/emailmarketer/" target="_blank" rel="noopener noreferrer">Interspire Email Marketer</a></li>
</ul>
<em>Advantages</em>
<ul>
 	<li>No email or contact list limits</li>
 	<li>Long term low cost</li>
</ul>
<em>Disadvantages</em>
<ul>
 	<li>Higher initial software costs</li>
 	<li>Install the software yourself</li>
 	<li>Possibly less support</li>
</ul>
<h3><em>3. Managed Newsletter Systems (Hosted/Self Hosted)</em></h3>
Some companies offer a mix between the above options, offering the customer the best of both worlds. The software would be hosted on the suppliers server and not your own, so therefore it is a hosted solution, but will offer a “managed” service whereby the pricing and service will be tailored to your needs. The service and support offered would be comparable to most smaller suppliers that operate on a strong customer and supplier relationship. Generally the supplier should be a web developer or similar company that can provide a tailored solution.

We offer a managed solution:

<em>Advantages</em>
<ul>
 	<li>Tailored service and pricing for your needs</li>
 	<li>Good service and support</li>
 	<li>Supplier deals with software setup</li>
</ul>
<em>Disadvantages</em>
<ul>
 	<li>Both setup and monthly cost</li>
</ul>
<p class="h2">What Extra Features Should I Have?</p>
Before you choose your software, spend some time researching all the additional features it provides to make sure you can maximise its use for your newsletters and run an effective email marketing strategy. I will save the explanations of the following features for other blogs but make sure your system has the following features:-
<ul>
 	<li>Auto Responders (<a href="/blog/setup-email-auto-responders-to-improve-your-email-marketing-strategy" target="_blank" rel="noopener noreferrer">What Are Autoresponders?</a>)</li>
 	<li>Segments</li>
 	<li>Triggers</li>
 	<li>Split Testing</li>
 	<li>Custom Fields</li>
 	<li>Bounce Processing</li>
 	<li>Statistics</li>
 	<li>Spam Checker</li>
 	<li>Inbox Previews</li>
 	<li>Attachments</li>
 	<li>Send to a Friend</li>
</ul>
<p class="h2">What Next?</p>
Do your research, and find a suitable newsletter tool for your needs at the price right for you. One you have found it get to know its features and how to use it. Run a lot of tests. Lastly use the wealth of information online to learn how to create effective newsletters and when to send them to increase open, read and click through rates.

Feel free to <strong><a href="/contact-us" target="_blank" rel="noopener noreferrer">contact me</a></strong> if you want any help finding the right solution for you and utilising it effectively.`,
        date: '2009-08-08',
        category: 'Emails'
    },
    {
        slug: 'benefits-of-rss-feeds-all-your-favourite-news-and-content-in-one-place',
        title: 'Benefits of RSS Feeds – All Your Favourite News and Content in One Place',
        excerpt: 'RSS Feeds are a very useful and powerful feature of websites that are still little understood by website owners and internet users. Many website owners I meet have either not heard of them or do not know the benefit they could bring to their online website or blog or for their own benefit it keeping up to date with news and information online. This blog hopes to explain what RSS Feeds are the benefits to you either as a website owner or as a website reader for keeping up to date with information on line.',
        content: `RSS Feeds are a very useful and powerful feature of websites that are still little understood by website owners and internet users. Many website owners I meet have either not heard of them or do not know the benefit they could bring to their online website or blog or for their own benefit it keeping up to date with news and information online. This blog hopes to explain what RSS Feeds are the benefits to you either as a website owner or as a website reader for keeping up to date with information on line.
<p class="h2">What are RSS Feeds?</p>
Firstly, RSS stands for <strong>Really Simple Syndication</strong> (although the the Really Simple is a little misleading as most website users would not know how to add it to their website nor subscribe to feeds). You will not hear many people refer to it as this though, most people will just use <strong>RSS</strong>.

<strong>RSS </strong>is a way to export your website content into a special format that can then be added to other websites or “<strong>RSS Readers</strong>“, therefore allowing you and other people to read your original website content on that other website or RSS Reader software. This means your content can appear in other places in addition to your website.
<p class="h2">How Will I Benefit from RSS?</p>
There are two ways you can use RSS Feeds and therefore different benefits can be gained.
<h3>1) Exporting Your Own Content as a RSS Feed</h3>
You can export your site content in a RSS Feed so others are able to read your website content without going to your website. So if you produce content other people may be interested in, your content could appear:
<ul>
 	<li>In someone else’s <strong>RSS Reader</strong> so they are notified immediately when you write new content and are able to read it there and then without going to your site</li>
 	<li>On someone else’s website so people visiting their website could read your content</li>
 	<li>On <strong>RSS Feed Websites</strong> that will show your content and also categorise it making it easier for others searching for your topic to find you and add to their RSS Reader</li>
</ul>
If you have content such as <strong>Latest News</strong>, <strong>Special Offers</strong>, <strong>Product Information</strong> or give away other interesting information on your website such as a <strong>Blog</strong> (as part of your marketing strategy perhaps) then having the above setup is of course an excellent way to spread that information across a wider reader base, and hopefully increase your website and content exposure to a wider audience.
<h3>2) Reading Other People’s RSS Feeds</h3>
In business it is vital to stay up to date with latest news and information in your business sector, what your comeptitors are up to, what your customers want etc. Outside of busines you may have interests or just want to keep up to date with the news from different sources. There is so much information on the internet you could benefit from if you had the time and resources to monitor and read it all.

Well now you can with a <strong>RSS Reader</strong>. RSS Readers allow you to add other websites RSS Feeds to your Reader so you can be notified and easily read all new content published by those websites in one place.

Your RSS Reader could be some software you install on your PC such as <a href="http://www.newsgator.com/Individuals/FeedDemon/Default.aspx" target="_blank" rel="noopener noreferrer">FeedDemon</a> or online using a RSS Reader provider like <a href="http://www.google.com/reader/" target="_blank" rel="noopener noreferrer">Google Reader</a>. Both are excellent and free tools to manage and read RSS Feeds.All you need to do is find the relevant websites that produce the information you are interested in, check if they export data to a RSS Feed (most news and blog sites do, and you should see the RSS icon shown above) and add that feed to your RSS Reader. When those websites publish new content, your RSS Reader will highlight new unread items for you to read (or not to read if its not of interest of course) much like your email inbox does. You can then read the article right there inside your RSS reader if you want, and move from one website to content to the next all in once place.

The benfits are obvious…
<ul>
 	<li>Instantly be notified when new content is published on websites and blogs you are interested in.</li>
 	<li>Read the new content in the RSS Reader without having to visit many websites</li>
 	<li>Allows you to keep up to date with latest news and information much easier and quicker</li>
</ul>
<p class="h2">How Do I Export My Website Content as a RSS Feed?</p>
If you own a website you should be using a <a href="/blog/the-benefits-of-using-the-joomla-content-management-system/">Content Management System</a> (CMS) to be able to add the content easily to your website. <strong>If you haven’t, then get one!</strong> <a href="/blog/why-you-need-a-website-content-management-system-cms/">Find out why</a>. Most of the better CMSs will have the facility to export your content as a RSS Feed already (<a href="/blog/exporting-joomla-content-as-a-rss-feed/">how to do it in Joomla</a>). If you cannot see how within the system, refer to the userguide or contact the CMS provider. If your CMS does not export it then maybe its time for an upgrade, or you could ask the developers to include that facility. Even without a CMS your site could export RSS Feeds but it would probably require a developer to implement this, and then you may not find it easy to write the content anyway.

So I highly recommend your website or blog uses a leading Content Management System that supports RSS Feeds amongst other common website functionality.
<p class="h2">How Do I Advertise my RSS Feed to Increase My Reader Base?</p>
Here are a few basic steps to increase your RSS Feed Reader Base…
<ul>
 	<li>Advertise your feed where you can on your website and email footers</li>
 	<li>Start a blog and with interesting content you can drive traffic to your blog and/or site on which you advertise your RSS Feeds also. That may be the blog RSS Feed itself like this one or a link to your website RSS Feed such as latest news. You will also need to market the blog too.</li>
 	<li>Submit your RSS Feed to RSS Directories such as:
<ul>
 	<li><a href="http://feedfury.com/" target="_blank" rel="noopener noreferrer">feedfury.com</a></li>
 	<li><a href="http://fetchrss.com/" target="_blank" rel="noopener noreferrer">fetchrss.com</a></li>
</ul>
</li>
</ul>
<p class="h2">How Do I Read RSS Feeds in a RSS Reader</p>
There are various RSS Readers on the market, but I favour <a href="http://www.newsgator.com/Individuals/FeedDemon/Default.aspx" target="_blank" rel="noopener noreferrer">FeedDemon</a>. Not only is it a very easy and user friendly system, it synchronises its feeds with <a href="http://www.newsgator.com/individuals/newsGatoronline/default.aspx" target="_blank" rel="noopener noreferrer">NewsGator Online</a>, so can then read your feeds online in the NewsGator site. I also have NewsGator for my mobile phone which then allows me to read my feeds wherever I am anytime. So FeedDemon fits nicely in my RSS Reading strategy.
<p class="h2">How Do I Find Relevant RSS Feeds to Add To My Reader?</p>
If you already read a lot of news, bogs and content online then you probably already know many sites that export content as RSS Feeds. Most of the major News websites, Bloggers and hopefully many other websites with Latest News should already be able to export RSS Feeds. Look for the icon above on their site, or a link that includes “Subscribe” or “RSS”.

If you don’t have such sites already, or want to increase the feeds you read, then using good old fashioned Google to search for relevant sites that provide regular information on your topics of interest is a good way, or use the websites listed above to find RSS Feeds categorised by topic.
<p class="h2">Do You Export and Read RSS Feeds Already?</p>
Feel free to post your comments here about your setup on exporting and reading RSS Feeds.`,
        date: '2009-07-11',
        category: 'Design/Development'
    },
    {
        slug: 'exporting-joomla-content-as-a-rss-feed',
        title: 'Exporting Joomla Content as a RSS Feed',
        excerpt: 'Joomla 1.5 supports exporting your section or category listing page as a RSS Feed right out of the box. So if you have a menu item linking to your latest news category for example, you can export this as a RSS Feed for others to add to their RSS Readers. The benefit is of course those readers will read your news updates without having to visit your site.',
        content: `<strong>Joomla 1.5</strong> supports exporting your section or category listing page as a <strong>RSS Feed</strong> right out of the box. So if you have a menu item linking to your latest news category for example, you can export this as a RSS Feed for others to add to their RSS Readers. The benefit is of course those readers will read your news updates without having to visit your site.

Either you can add a new Syndicate module which will show a RSS icon and link for the pages that support exporting, or just add the following to the end of the section or category listing URL:

<strong>?format=feed&amp;type=rss</strong>

So for example, with <strong>SEF</strong> enabled your latest news RSS Feed would be:-

http://www.yourdomain.com/news/<strong>?format=feed&amp;type=rss</strong>

<strong>Note</strong>: without SEF enabled, and with all the other variables in the URL, you would need to use an &amp; instead of the ?. i.e. <strong>&amp;format=feed&amp;type=rss</strong>`,
        date: '2009-06-16',
        category: 'Technical'
    },
    {
        slug: 'to-better-serve-caerphilly-web-design-weve-moved-office-to-bedwas-industria',
        title: 'To Better Serve Caerphilly Web Design, We&#8217;ve Moved Office to Bedwas Industrial Estate',
        excerpt: 'To provide an even better Caerphilly Web Design service we have moved into a new office based in the Valleys Enterprise Centre, Bedwas Industrial Estate, Greenway, Caerphilly. The office move is part of our expansion plan to take on more staff and so we can be located in a more convenient location to service and support our customers.',
        content: `<p>To provide an even better <strong>Caerphilly Web Design</strong> service we have moved into a new office based in the <strong>Valleys Enterprise Centre, Bedwas Industrial Estate, Greenway, Caerphilly</strong>.  The office move is part of our expansion plan to take on more staff and  so we can be located in a more convenient location to service and  support our customers. <a href="/contact-us/">Click here</a> to contact us.<br /> <br />Our new address is:<br />Amity Web Solutions Ltd, Office 6, Valleys Enterprise Centre, Greenway, Caerphilly, CF83 8GF<br /><br /></p>`,
        date: '2009-06-15',
        category: 'Amity News'
    },
    {
        slug: 'installing-tweetdeck-and-adobeair-on-64bit-ubuntu-9-04',
        title: 'Installing Tweetdeck and AdobeAir on 64bit Ubuntu 9.04',
        excerpt: 'Here is an overview on how to install Tweetdeck and AdobeAir on 64bit Ubuntu. There are a few sites with instruction but none of them worked in total, so have spent a few hours combining them together which worked for me. You will need Flash Player 10 installed, a link is provided for this if you don’t have it.',
        content: `Here is an overview on how to install Tweetdeck and AdobeAir on 64bit Ubuntu. There are a few sites with instruction but none of them worked in total, so have spent a few hours combining them together which worked for me. You will need Flash Player 10 installed, a link is provided for this if you don’t have it.
<p class="h2"> Install Adobe Air</p>
This website shows the main process I followed, BUT the link to the getlibs-all on the boundlesssupremacy site is not working. So follow this process to obtain getlibs-all and install AdobeAir:-

<em><strong>1. Download getlibs-all.deb</strong></em> http://frozenfox.freehostia.com/cappy/ (Update 8th June 2012: this site seems to be down)

<em><strong>2. Install AdobeAir</strong></em>

&nbsp;

<a href="https://help.adobe.com/en_US/air/build/WS5b3ccc516d4fbf351e63e3d118666ade46-7fee.html" target="_blank" rel="noopener noreferrer">Click here</a>

<strong>Note</strong>: no need to download getlibs-all from boundlesssupremacy which is not working, you have downloaded it above.
<p class="h2">Installing Tweetdeck</p>
Now this may be enough for you to download Tweetdeck from <a href="http://tweetdeck.com/" target="_blank" rel="noopener noreferrer">http://tweetdeck.com/</a>. But I had a further issue, which I can see is quite common, in that the Download button did not work!

So if this is the same for you, download Tweetdeck from the Adobe Marketplace here: <a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&amp;offeringid=10187&amp;marketplaceid=1" target="_blank" rel="noopener noreferrer">http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&amp;offeringid=10187&amp;marketplaceid=1</a>

<strong>Note</strong>: If you need install Flash Player to download it, follow the next steps.
<p class="h2">Installing Flash Player</p>
My last issue was that to download from Adobe Marketplace you need Flash Player installed in Ubuntu. Here is the process that worked for me:- <a href="http://www.cyberciti.biz/tips/install-flash-10-ubuntu-linux-64bit.html" target="_blank" rel="noopener noreferrer">http://www.cyberciti.biz/tips/install-flash-10-ubuntu-linux-64bit.html</a>

Hope that helps! Linux can be real pain to configure and install software for non-techies. It’s no wonder Microsoft Windows is still the leader with issues like this.`,
        date: '2009-06-15',
        category: 'Technical'
    },
    {
        slug: 'interspire-email-marketer-integrating-with-other-systems',
        title: 'Interspire Email Marketer – Integrating with Other Systems',
        excerpt: 'Interspire Email Marketer (IEM), in my opinion, is the best newsletter system on the market that can be downloaded and installed on your own server. At least, I cannot find any other that comes close to it’s features, and I have looked hard. It does have one drawback though, and that’s the system API does not support integrating it into third party applications so subscribers can update their newsletter preferences from within another system. Interspire stated they don’t provide support on technical aspects of the API, so I have had to create my own API functions until they realise the benefit of this and write one themselves. This blog gives you a quick overview of the files to edit.',
        content: `<strong>Update June 26 2012</strong>: You can download a plugin to tie in with expression engine from my <a href="https://github.com/amityweb/iem_subscriber" target="_blank" rel="noopener noreferrer">github repo</a>.

<strong>Update May 6th 2010</strong>: I have quite a lot of people asking for my code, but I need to point out it is not complete at all, but more like a half baked attempt to work out this API thing.. I would really like to spend more time on this and write a more definitive guide, but alas, time gets the better of me. Please see my long comment below for the email I send people. Please <a href="/contact-us" target="_blank" rel="noopener noreferrer">contact me</a> if you would like the file.

<strong>Update January 13th 2010</strong>: I had a little breakthrough this evening… It’s possible to use the XML API to call PHP functions in the subscribers.php file. So there is no need to modify the xml.php or subscribers.php files to do some updates like for Custom Fields. I hope to be able to write another blog on this to explain it more, but in the meantime you can <a href="/contact-us" target="_blank" rel="noopener noreferrer">contact me</a> to obtain an email I sent to someone earlier that explains it in more detail.

<strong>Update December 15th 2009</strong>: As stated in the comments below, I believe the IEM API to be more powerful than the Interspire instructions suggest, and as such believe some of my coding and changes are not required, or could be improved. I therefore do not think I should be giving out the scripts anymore as I have been, but instead would like to investigate the subscribers.php API in more detail.

<hr />

<a href="http://www.interspire.com/emailmarketer/" target="_blank" rel="noopener noreferrer"><strong>Interspire Email Marketer</strong></a> (IEM), in my opinion, is the best newsletter system on the market that can be downloaded and installed on your own server. At least, I cannot find any other that comes close to it’s features, and I have looked hard. It does have one drawback though, and that’s the system API does not support integrating it into third party applications so subscribers can update their newsletter preferences from within another system. Interspire stated they don’t provide support on technical aspects of the API, so I have had to create my own API functions until they realise the benefit of this and write one themselves. This blog gives you a quick overview of the files to edit.
<p class="h2">Integrating Interspire Email Marketer into a Third Party System</p>
Firstly I have to say I needed help with this. Unfortunately Interspire took a long time to respond with the answer “<em>we do not provide technical support for customization, integration, or the API</em>“! Not only a long response time, but with no help on what is a comparatively expensive system for small businesses (the price has more than doubled since last year).

So with a few days over the weekend and missing all this great sun :( I have written my own functions :)

I initially realised there is no UpdateSubscriber function within the API, and so had to create my own. I now have a third party system (<a href="http://www.zen-cart.com/" target="_blank" rel="noopener noreferrer">Zencart Shopping Cart</a>) in which account holders can view their newsletter subscriptions and change them such us subscribe or unsubscribe. This will then automatically update the IEM newsletter system. Not only that, if a subscriber changes their email address, or actual address and telephone numbers, then these are also updated in IEM. FANTASTIC! Otherwise customers would need to login to two systems to change details… that’s not good, and is asking for trouble.

So now I have an excellent newsletter system that subscribers can manage their data from with a third party system. Yes, I know this should be straightforward and standard you say, which is why my clients of course asked me to do it, but very surprisingly this was not built into IEM.

The code is too much to go into detail here, only that the following files need updating, based on other functions:-
<ul>
 	<li>/xml.php</li>
 	<li>/admin/functions/api/subscribers.php</li>
</ul>
The main functions I created were:-
<ul>
 	<li>xml.php -<strong> case ‘updatesubscriber’</strong> was created to action an <strong>UpdateSubscriber </strong>call in the XML data passed to IEM</li>
 	<li>subscribers.php – function <strong>UpdateSubscriberCustomField()</strong> was created to update the Custom fields you have created. This in turn calls a few other functions already there such as UpdateEmailAddress() and ChangeSubscriberFormat().</li>
</ul>
I do hope Interspire can eventually introduce this into their code as I am sure they would do a better job than I, but in the meantime at least I have a working integration.

Just <a href="/contact-us" target="_blank" rel="noopener noreferrer">contact me</a> if you want to know more.`,
        date: '2009-05-31',
        category: 'Design/Development'
    },
    {
        slug: 'adding-dynamic-joomla-modules-and-content-to-other-websites',
        title: 'Adding Dynamic Joomla Modules and Content to Other Websites',
        excerpt: 'Just after publishing my latest blog, Integrating Joomla and Zencart (Sort Of) Using CURL and Standalone Templates, I realised that this method can be used to show Joomla modules on just about any website that you can add code to. The blog is mainly about Zencart because that’s what I use it for, but I realised if you have any other website you can access the code for, then you can follow these instructions to add Joomla modules to your website.',
        content: `<p>Just after publishing my latest blog, <a href="/blog/integrating-joomla-and-zencart-sort-of-using-curl-and-standalone-templates/">Integrating Joomla and Zencart (Sort Of) Using CURL and Standalone Templates</a>, I realised that this method can be used to show Joomla modules on just about any website that you can add code to. The blog is mainly about Zencart because that&rsquo;s what I use it for, but I realised if you have any other website you can access the code for, then you can follow these instructions to add Joomla modules to your website.</p>
<p><br /> So just to summarise my <a href="/blog/integrating-joomla-and-zencart-sort-of-using-curl-and-standalone-templates/">previous blog</a>:</p>
<ol>
<li>Create your standalone modules in a&nbsp; new template, so it could be your Latest News, Navigation, Newsflash, or even Joomla content pages.</li>
<li>Assign the standalone module to a menu item and obtain that menu item URL</li>
<li>Visit the URL in a browser just to test the standalone module displays on its own</li>
<li>Add the CURL script to other websites where you want this module displayed</li>
<li>Hey presto, Joomla modules or content displayed on other websites!</li>
</ol>`,
        date: '2009-05-29',
        category: 'Design/Development'
    },
    {
        slug: 'integrating-joomla-and-zencart-sort-of-using-curl-and-standalone-templates',
        title: 'Integrating Joomla and Zencart (Sort Of) Using CURL and Standalone Templates',
        excerpt: 'I’ve developed quite a few Joomla and Zencart sites, some clients taking both together for their website. Joomla being great for the website CMS, and Zencart great for the shopping cart. The problem is, no complete, working integration exists between them. None that I have found anyway. A couple have been written and are work in progress in my mind, but still lacking in fundamental functionality. So the website ends up clearly as two separate systems to the website visitor which is not ideal. So I have spent some time trying to think of a way to integrate the two together and have come up with what looks to be a good solution… CURL.',
        content: `<p>I&rsquo;ve developed quite a few Joomla and Zencart sites, some clients taking both together for their website. Joomla being great for the website CMS, and Zencart great for the shopping cart. The problem is, no complete, working integration exists between them. None that I have found anyway. A couple have been written and are work in progress in my mind, but still lacking in fundamental functionality. So the website ends up clearly as two separate systems to the website visitor which is not ideal. So I have spent some time trying to think of a way to integrate the two together and have come up with what looks to be a good solution&hellip; CURL.</p>
<p>This blog explains how to set this up in order to show Zencart within your website design. You will need knowledge of PHP, CURL and creating and assigning templates in Joomla and Zencart. <strong>Note</strong>: this is not integrating the Admin but the front end, to give the impression to the visitor that they are on the same website!</p>
<p>Actually, you don&rsquo;t even have to use Zencart. It can be any other separate system to your Joomla website that you can change the template for. <strong>So you can use this method to add any Joomla module onto any other non-Joomla website. </strong></p>
<p><strong>[Update 6th June 2009] Note: Since going live with a site using this method it has become apparent that occasionally under heavy load the CURL does not function and either shows a &ldquo;Cannot Connect to Database Error&rdquo; or a &ldquo;Flooding&rdquo;error. Therefore it may not be the best method after all </strong><strong>I will keep searching for an alternative. </strong></p>
<p>What we would like to see is the Zencart system inside your main website (inside your header, main navigation and footer) but not as a wrapper (iframe) because this is bad for search engines. The solution is simple&hellip; create a new template that only shows the website header, another one for the navigation, and another one for the footer, and use CURL to &ldquo;pull in&rdquo; the website header and footer and any other modules.</p>
<h3>Step 1 &ndash; Create the templates</h3>
<p>Create a new template that only shows your header. So in the index.php file only include the necessary Joomla core code and the module. Here is an example that will only output the header code for this template:<br /> <br /> <code>defined( '_JEXEC' ) or die( 'Restricted access' );<br /> ?&gt;<br /> &lt;div id="header_box"&gt;<br /> &lt;div id="header"&gt;&lt;/div&gt;<br /> &lt;/div&gt;<br /> &lt;div id="main_nav_box"&gt;<br /> &lt;jdoc:include type="modules" name="nav" style="raw" /&gt;<br /> &lt;/div&gt;</code><br /> <br /> Thats the entire index.php file. You still need the templateDetails.xml file and upload your new template to the /templates/ folder. mine is just called &ldquo;header&rdquo;. I do the same for the footer.</p>
<h3>Step 2 &ndash; Assign the New Bare Template to a Menu Item So You Can Link to It</h3>
<p>Joomla allows you to assign different templates to different menu items. So first create a new menu item you will use to assign the template to. You don&rsquo;t have to publish this, just create a new Menu that you don&rsquo;t use. I call mine &ldquo;Hidden Menu&rdquo;. Once your menu item is created, go to Extensions -&gt; Template Manager to assign the new template to this new menu item.</p>
<h3>Step 3 &ndash; Check out the Module Web Page</h3>
<p>Now just do a quick test&hellip; grab the URL for this new menu item from the Menu Manager and visit it in the browser. You will now see your standalone module on its own in the browser. This module can be dynamic content, your menus, latest news, any dynamic content provided by Joomla. Now we know that works we can add it to the Zencart template&hellip;.</p>
<h3>Step 4 &ndash; Add the New Standalone Joomla Modules to Zencart</h3>
<p>In your Zencart template you can now remove the Zencart built in Header and Footer to be left with just the main page with your products and left and/or right hand columns. Instead add in the CURL script to call in the above Joomla modules to appear instead!<br /> <br /> <code>&lt;?php<br /> $curl = curl_init();<br /> curl_setopt($curl, CURLOPT_URL, HTTP_SERVER.'http://www.your_domain.com/index.php?option=com_content&amp;view=article&amp;id=1&amp;Itemid=51');<br /> curl_exec($curl);<br /> curl_close($curl);<br /> ?&gt;</code><br /> <br /> Obviosuly just update the above CURL link to your menu link obtained in Step 2 and 3.</p>
<h3>Step 5 &ndash; Finish</h3>
<p>That&rsquo;s it! Now if you visit your Zencart store you should see the Joomla header and footer appearing above and below your main Zencart shop so it looks like it&rsquo;s within the same site. Updating Joomla such as adding new links, will automatically update them in the Zencart store. So when you now link from your website to Zencart, it looks to the casual user that they are on the same website.</p>`,
        date: '2009-05-29',
        category: 'Design/Development'
    },
    {
        slug: 'joomla-tutorial-creating-a-custom-page-title-title-tag-to-improve-seo',
        title: 'Joomla Tutorial – Creating a Custom Page Title (Title Tag) to Improve SEO',
        excerpt: 'In a previous blog I mentioned that your page title (Browser Title or Title Tag) is one of the most important aspects to rank your website for keyword searches. For example, “About Amity Web Solutions, Web Design in Caerphilly” is better than “About Us” because it not only shows the search engine reader the company name but additional keywords which is important for ranking (see previous blog about 10 basic search optimisation techniques to improve your website rankings).',
        content: `<p>In a previous blog I mentioned that your page title (Browser Title or Title Tag) is one of the most important aspects to rank your website for keyword searches. For example, &ldquo;<strong>About Amity Web Solutions, Web Design in Caerphilly</strong>&rdquo; is better than &ldquo;<strong>About Us</strong>&rdquo; because it not only shows the search engine reader the company name but additional keywords which is important for ranking (<a href="/blog/10-basic-search-engine-optimisation-seo-techniques-to-improve-your-website-">see previous blog about 10 basic search optimisation techniques to improve your website rankings</a>).</p>
<p>The problem with Joomla 1.5 is the form to set this title different to what the actual page is called is hidden away in the depths of the Menu Manager, and not in the page editor itself. This blog gives an overview of how to set the page title different to the page name in Joomla 1.5.</p>
<p class="h2">Method</p>
<ol>
<li>Choose the menu item that the page is linked to by going to Menu -&gt; Your Menu</li>
<li>Click on the Menu name to edit it</li>
<li>On the right hand side of the page, choose the tab &ldquo;Parameters (System)&rdquo;</li>
<li>In the drop down you will see &ldquo;Page Title&rdquo;</li>
<li>Enter your custom page title here</li>
<li>If you do not want this page title showing on the page (which you probably wont because you would want the actual page name to be displayed), choose No for &ldquo;Show Page Title&rdquo;</li>
<li>Click Save or Apply</li>
</ol>
<p>Your page Browser Title should now show the custom title you have entered with your chosen keywords.</p>
<p>Remember to use important keywords and location based keywords in the title. Read the blog <a href="/blog/10-basic-search-engine-optimisation-seo-techniques-to-improve-your-website-">10 basic search optimisation techniques to improve your website rankings</a> to find out more about using keywords and other techniques to use.</p>
<p>Hope that helps.</p>`,
        date: '2009-05-26',
        category: 'SEO'
    },
    {
        slug: 'blog-to-your-wordpress-blog-from-your-iphone',
        title: 'Blog to Your WordPress Blog from Your iPhone',
        excerpt: 'I’m always looking for great iPhone apps that can help with my interests such as work and social media. Today I found what may end up being one of my favourites, a WordPress app for the iPhone.',
        content: `<p>I&rsquo;m always looking for great iPhone apps that can help with my interests such as work and social media. Today I found what may end up being one of my favourites, a WordPress app for the iPhone.</p>
<p>A free application through the AppStore, the WordPress app allows you to create a connection to your blogs to post and edit blogs, create drafts, add tags, categorise and more. I&rsquo;m always wanting to write more blogs but it&rsquo;s just finding the time. Now there&rsquo;s no excuse, I can blog when out and about on trains, waiting rooms, even on the beach! I know you can blog by email, and you can access your blog via Safari anyway, but this app gives you far more control and freedom over your blogs which makes mobile blogging a breeze.</p>
<p><a href="http://iphone.wordpress.org/">http://iphone.wordpress.org</a></p>
<p>Blogged from my iPhone.</p>`,
        date: '2009-05-25',
        category: 'CMS'
    },
    {
        slug: 'our-jobs-manager-for-recruitment-agencies-has-been-updated-for-joomla-1-5',
        title: 'Our Jobs Manager for Recruitment Agencies has been Updated for Joomla 1.5',
        excerpt: 'We have now released the Jobs Manager component for Joomla 1.5. Our previous version would not work on the much improved Joomla 1.5. This gave us the opportunity to re-develop the system from scratch using MVC (model view controller) architecture for a much better designed and built system.',
        content: `<p>We have now released the <strong>Jobs Manager</strong> component for <strong>Joomla 1.5</strong>. Our previous version would not work on the much improved Joomla 1.5. This gave us the opportunity to re-develop the system from scratch using MVC (model view controller) architecture for a much better designed and built system. <br /><br />The Jobs Manager component is designed for recruitment companies to manage their jobs online. Jobs can be added and edited to be listed on the website front end, with a search form for job seekers to find specific jobs for them.</p>`,
        date: '2009-05-24',
        category: 'Amity News'
    },
    {
        slug: 'twitter-for-business-where-do-i-start',
        title: 'Twitter for Business – Where Do I Start!',
        excerpt: 'Well I’ve jumped on the twitter bandwaggon and have started Twittering on at http://twitter.com/AmityWeb. I actually think I am quite late. I’ve found many successful Twitterers (?) that have been doing it for a couple of years now and have built up quite a reputation and following. I wish I started a couple of years ago. But now I am here I am trying to embrace the Twitter community with open arms and just hope I can provide some useful information (you will be pleased to know I don’t have a cat so you wont be getting updates on that!). This blog post is just to raise some questions at this time and hopefully to obtain some feedback from you readers, so please feel free to add comments.',
        content: `<p>Well I&rsquo;ve jumped on the twitter bandwaggon and have started Twittering on at <a href="http://twitter.com/AmityWeb" target="_blank" rel="noopener noreferrer">http://twitter.com/AmityWeb</a>. I actually think I am quite late. I&rsquo;ve found many successful Twitterers (?) that have been doing it for a couple of years now and have built up quite a reputation and following. I wish I started a couple of years ago. But now I am here I am trying to embrace the Twitter community with open arms and just hope I can provide some useful information (you will be pleased to know I don&rsquo;t have a cat so you wont be getting updates on that!).</p>
<p>This blog post is just to raise some questions at this time and hopefully to obtain some feedback from you readers, so please feel free to add comments.</p>
<p>&nbsp;</p>
<p class="h2">What I Want to Achieve</p>
<p>I am not the sort of person to tell the world (non) intersting updates on my personal life. I don&rsquo;t want to follow others telling me what they are doing now, and I practice what I preach, so am not going to use it to inform my followers &ldquo;I had a nice cup of tea&rdquo;. I follow people <strong>to learn</strong>. I want regular, fresh and up to date information and news about my work and my interests (one and the same). I therefore want followers who are interested in the same thing. The objective is to all learn from each other, helping us and our businesses move forward.</p>
<p>Like every other business owner, I also want my business to make more sales. I can see the potential in Twitter for this. Combined with my blog I hope to increase my followers, impart useful information to them via the tweets or blog and ultimately hope to become more prominent and known in my industry in this area which hopefully will lead to more sales. I think Twitter can be a useful means to do that, so I am now in a steep learning curve with so many things to learn.</p>
<p class="h2">So Many Things to Learn</p>
<h3>How do I increase my followers?</h3>
<p>This is the crucial question&hellip; I have read many websites and most say the same thing. I will be trying some of them out (I don&rsquo;t want to do all of them) and think this will be a slow process. The key will be to build up <strong>relevant </strong>followers. Maybe this can be done via building up loads of non-relevant followers so get to people through their network, or maybe not. At the moment I think 90% of my followers are spammers and &ldquo;marketeers&rdquo;.</p>
<h3>What Should I Tweet About to Maintain Interest?</h3>
<p>I think the tweets need to be a mixture of business and personal. Business related to provide useful information on <strong>blogs</strong>, <strong>twitter</strong>, <strong>joomla</strong>, <strong>zencart</strong>, <strong>cakephp</strong>, <strong>wordpress, seo </strong>etc. and impart knowledge that others are interested in, but also to put a human face to the posts by also mixing them up with some personal tweets. I would like to get to know the people I follow and who follow me.</p>
<h3>When is the Best Time to Tweet To Maximise Read and Click Through Rates?</h3>
<p>I&rsquo;ve also been tempted to tweet late at night but then wondered if any relevant people would see them. The people I am interested in reading my tweets mostly would read them during working hours. So certainly during working hours is the best time for me, but then at what times?</p>
<h3>The Ultimate Question for Business &ndash; How Do I Make Money from Twitter?</h3>
<p>Finally, like anyone, I would like to make money from it. I can only see two methods at the moment and that is 1) try to become known and respected enough so people would want to use my business services or 2) drive people to sites with adwords etc. I don&rsquo;t think the latter will drive enough traffic to make money and its not what I want, so building up my own profile to increase my business clients is probably my main goal.</p>
<p>So some intersting questions I hope to find out and answer over the coming months!</p>`,
        date: '2009-05-19',
        category: 'SEO'
    },
    {
        slug: '10-basic-search-engine-optimisation-seo-techniques-to-improve-your-website',
        title: '10 Basic Search Engine Optimisation (SEO) Techniques to Improve Your Website Rankings',
        excerpt: 'There are so many websites still not being developed with the fundamental and necessary techniques that can dramatically increase their search engine rankings. Most of them are easy to implement. So I thought I would write a brief article on what I consider the top 10 best and fundamental techniques to try to improve search engine rankings. It is by no means a complete solution, and may or not work for you, but can be considered the bare minimum necessary techniques you should implement.',
        content: `There are so many websites still not being developed with the fundamental and necessary techniques that can dramatically increase their search engine rankings. Most of them are easy to implement. So I thought I would write a brief article on what I consider the <strong>top 10 best and fundamental techniques</strong> to try to improve search engine rankings. It is by no means a complete solution, and may or not work for you, but can be considered the bare minimum necessary techniques you should implement.
<p class="h2">1. Browser Title (Title Tag)</p>
The Browser Title (Title Tag) is one of the most important aspects of optimising your site for search engines. The Title of the page is what appears in the results in Google and other Search Engine results pages.

When a user performs a keyword search, one of the considerations on where it appears in the results is this Browser Title. <strong>Having the keywords in the page title will increase the rankings of the site</strong>.

For example, searching for "<a href="http://www.google.co.uk/search?hl=en&amp;safe=off&amp;client=firefox-a&amp;rls=org.mozilla:en-GB:official&amp;hs=UGz&amp;ei=gfAPSrb8AaW7jAffweDkCA&amp;sa=X&amp;oi=spell&amp;resnum=1&amp;ct=result&amp;cd=1&amp;q=web+design+caerphilly&amp;spell=1" target="_blank" rel="noopener noreferrer">Web Design Caerphilly</a>" results in Amity Web Solutions coming high (usually top). Because these keywords are in the browser title for Amity Web Solutions website.

I see so many websites without an optimised title, and so many without a title at all! <strong>These websites are missing out on visitors and potential business</strong>.Yet it should be an easy solution to fix. If you can't edit your Title then I would question your CMS system or web developer capabilities. This is a fundamental requirement of an optimised site.

Most <a href="/blog/why-you-need-a-website-content-management-system-cms/">content management systems</a> these days allow the browser Title to be inserted for each page. If it doesn't then you need a new content manager. If you don't have a content manager get in touch with your web developer to insert keywords for each page Title. A few key rules are:-
<ul>
 	<li>Use no more than approx. 70 characters (9 to 12 words)</li>
 	<li>Don't repeat keywords too many times (keyword spamming)</li>
 	<li>Make the title human readable and meaningful whilst including the keywords</li>
 	<li>If you market locally, then use local based keywords such as your town or city - it is much easier to get ranked on a local search than nationally</li>
 	<li>Have a different Title for each page</li>
</ul>
<p class="h2">2. META Description</p>
Same as the META Title, the META Description is also very important. The Description summarises what the web page is about and is also used for keyword search results. Image 2 also shows the META Description in Google search results. A few key rules are:-
<ul>
 	<li>Use no more than approx. 150 to 160 characters</li>
 	<li>Don't repeat keywords too many times (keyword spamming)</li>
 	<li>Make the description human readable and meaningful whilst including the keywords</li>
 	<li>If you market locally, then use local based keywords such as your town or city - it is much easier to get ranked on a local search than nationally</li>
 	<li>Have a different Description for each page</li>
</ul>
<p class="h2">3. Keywords in Content</p>
Content is what people read after all and contains the information people are after, and search engines know this. So make sure your keywords for products and services plus target market locations are in the content.

Your <strong>Home Page</strong> is more important than any other for this. So make sure you have plenty of indexable, keyword rich content on your home page. Use approximately 3% to 7% ratio of keywords to content, i.e. for every 100 words there should be a keyword mentioned 3 to 7 times. To be safe go with 4 or 5.

There are so many other factors than can improve content and increase your rankings such as good coding practices, image ALT tags, usage of Headings (H1, H2 etc.) that we shall save that for another blog.
<p class="h2">4. Regular New Content (e.g. Latest News/Case Studies/Portfolio/Testimonials)</p>
What's the best way to keep adding these keywords to content? Adding it as <strong>new</strong> pages. Google and other search engines like new and updated content so add new pages often. To do this you can have a page summarising either Latest News, Case Studies, Testimonials or Portfolios which you add to regularly.

In my opinion Latest News is the best, you can add all sorts to it. The effectiveness of this can be demonstrated by my own site. Searching Google for just "<a href="http://www.google.co.uk/search?q=4networking&amp;ie=utf-8&amp;oe=utf-8&amp;aq=t&amp;rls=org.mozilla:en-GB:official&amp;client=firefox-a">4networking</a>" shows my website quite high (page 1 of google, near the middle at time of writing - <strong>note</strong>: you may see different results based on location) which is very good considering I am not <a href="http://www.4networking.biz/">4Networking</a> itself. I <a href="/blog/weve-joined-4networking-business-networking-caerphilly">recently joined 4Networking</a> (a great business networking organisation) and added this information as a Latest News page on my site summarising how great an organisation it is. This page therefore shows for this keyword increasing the visibility of my business website.
<p class="h2">5. Google Local Business Centre</p>
In Image 1 above, you can see a picture of a map, indicating where Amity Web Solutions is. This is fed from <a href="https://www.google.com/local/add/">Google Local Business Center</a>,  a free service to add your business on Google Maps. Many times this map comes at the top or near the top, so even if your website is not listed in search results, it could appear here. So obviously an important listing to have.
<p class="h2">6. Google/Yahoo Sitemap</p>
This is a specially formatted (XML) page that you can send to Google, Yahoo and other search engines telling them what pages you have on your site. It makes the search engines job at finding the pages on your site easier. Search engines state it wont affect rankings, but as soon as I listed mine my rankings went up. Having one can do no harm, so can only be a positive thing to have.
<p class="h2">7. Search Engine Friendly URLs</p>
Content Managers and dynamic websites use dynamic URLs to show pages.A typical URL would be something like "index.php?option=com_content&amp;id=3&amp;Itemid=4" on the end of the domain name. This gives no information on what the page is about. So having keywords in this URL, i.e.  "web-design.html " or "about-us.html" should also help increase the rankings of the site. Even if you don't see any change, having a link to this page is better for humans to read and click on that the one that gives no information on what it's about.
<p class="h2">8. Increase Backlinks</p>
One of Googles  main ranking factors is "how many sites link to yours". The more links to your site, the better Google thinks your site is. A sort of recommendation from other websites. The better ranked those websites are the better Google thinks yours is again. So add links to your website onto other websites such as forums and directories. You could even ask your customers or suppliers to link exchanges.
<p class="h2">9. Forum Profile and Signature Links</p>
Following on from above, Forums are a great way to advertise the site. Most will have a profile page you add a link to your website in (which Google may find) and some even allow it to go in the signature of the forum post so readers will see it. Find forums you can actively participate in (never use them spam you may get banned), register and join the conversations. Ask or answer questions to become part of the forum community and advertise your profile or signature link.
<p class="h2">10. Refine and Improve Your Keywords</p>
Knowing what keywords to use is a hard one. Having a competitive keyword will reduce your chances due to everyone else using it (but have many people searching for it). Finding a niche keyword will increase your chances (but lower the amount of people searching for it). Google have an excellent couple of free tool you can use to review and suggest the keywords you use: <a href="https://ads.google.com/intl/en_uk/home/tools/keyword-planner/" target="_blank" rel="noopener noreferrer">Google Keyword Search Tool</a> and <a href="https://adwords.google.co.uk/select/KeywordToolExternal" target="_blank" rel="noopener noreferrer">Google AdWords Keyword Tool</a>.
<p class="h2">How to Monitor Your Success?</p>
So how do yo know if the above methods have been a success? Before you do any of the above, make sure you have installed and configured <a href="http://www.google.com/analytics/" target="_blank" rel="noopener noreferrer">Google Analytics</a>. A very powerful, free, statistics tool that shows you how many visitors you have had, where they came from, what keywords the used and a lot more. You can then monitor your changes and your visitor statistics on an ongoing basis and refine your methods to optimise the site. Also checkout <a href="http://www.google.com/webmasters/" target="_blank" rel="noopener noreferrer">Google Webmaster Central</a>, there are a few more tools to help you analyse your site. Yahoo and other search engines may also provide similar free tools to help you optimise your site.`,
        date: '2009-05-17',
        category: 'SEO'
    },
    {
        slug: 'were-now-on-twitter-get-updates-from-us-fast-by-following-us',
        title: 'We&#8217;re Now On Twitter! Get Updates from Us Fast by Following Us',
        excerpt: 'We\'re now on Twitter, the very popular and fast growing service that offers quick updates to your followers of "what you are doing now".',
        content: `<p>We're now on <a href="http://twitter.com/AmityWeb" target="_blank" rel="noopener noreferrer">Twitter</a>, the very popular and fast growing service that offers quick updates to your followers of "what you are doing now".<br /> <br />We will be using it to release information relating to Web Design and Development topics including new posts to our blog. So follow us on Twitter to get up to date, real time communication from us on these topics.</p>`,
        date: '2009-05-13',
        category: 'Amity News'
    },
    {
        slug: 'we-have-a-new-blog-to-publish-articles-on-websites-and-development-related',
        title: 'We Have a New Blog To Publish Articles on Websites and Development Related Information',
        excerpt: 'We have published our new blog at http://www.amityweb.co.uk/blog/. The aim of the blog is to publish articles on web design and development related topics primarily aimed at website owners to increase their knowledge and experience in this area.',
        content: `<p>We have published our new blog at <a href="/blog/" target="_blank" rel="noopener noreferrer">http://www.amityweb.co.uk/blog/</a>.<br /><br />The  aim of the blog is to publish articles on web design and development  related topics primarily aimed at website owners to increase their  knowledge and experience in this area.<br /> <br />Topics will include:-</p>
<ul>
<li>Content Management Systems (CMS) and their Use</li>
<li>Search Engine Optimisation (SEO)</li>
<li>News and Information About Relevant Systems and Topics</li>
<li>Hints and Tips in Website Maintenance and Optimisation</li>
<li>Anything else related we can think of!</li>
</ul>
<p>The blog exports the articles to RSS readers to add the link to your favourite reader for regular updates.<br /><br />We are using <a href="http://wordpress.org/" target="_blank" rel="noopener noreferrer">Wordpress</a>, the Blog Tool and Publishing Platform.</p>`,
        date: '2009-05-13',
        category: 'Amity News'
    },
    {
        slug: 'the-benefits-of-using-the-joomla-content-management-system',
        title: 'The Benefits of Using the Joomla Content Management System',
        excerpt: 'I am big fan of the Joomla Content Management System. I must have developed over 50 websites using Joomla over the past few years. With so many advantages over other systems it is my CMS of choice. That said, it’s still not widely known outside the tech world, with so many website owners not hearing of it. This blog is to provide some information about the benefits of using Joomla.',
        content: `<p>I am big fan of the<strong> <a href="http://www.joomla.org/" target="_blank" rel="noopener noreferrer">Joomla Content Management System</a></strong>. I must have developed over 50 websites using Joomla over the past few years. With so many advantages over other systems it is my CMS of choice. That said, it&rsquo;s still not widely known outside the tech world, with so many website owners not hearing of it.</p>
<p>This blog is to provide some information about the benefits of using Joomla.</p>
<p class="h2">Benefits of Joomla</p>
<h3>Administration</h3>
<p>The website content management administration interface is very user friendly and easy to use. If you are familiar with leading word processors you will be familiar in using the editor. It allows you to format the text and insert tables, images and hyperlinks and more. You can read more on the benefits on using a Content Manager in a previous article <a href="/blog/why-you-need-a-website-content-management-system-cms/" target="_self" rel="noopener noreferrer"><strong>Why You Need a Website Content Management System (CMS)</strong></a>.</p>
<h3>Design</h3>
<p>Joomla has a fantastic template based system for designs. Designs can easily be installed and switched between at ease. There are also thousands of free and low cost Joomla designs available on the internet to download and install. So for low budget website owners, there is no need for graphic design and additional cost. You can choose from thousands of designs to use easily.</p>
<p>If customisation of the design is required, Joomla is built in such a way to make creating or changing designs very easy for developers to do, also reducing cost to having a bespoke website built.</p>
<h3>Functionality</h3>
<p>With a development community of thousands of people there are in turn thousands of excellent and functional &ldquo;add ons&rdquo; that can be easily added into the Joomla website making it a far more powerful tool than a simple brochure website. Most of the add ons are free, although many commercial ones are low cost and worth the investment. Using these add ons means there are no development costs to create your own functionality. Such add ons are:-</p>
<ul>
<li>Shopping Carts</li>
<li>Document Managers</li>
<li>Image Galleries</li>
<li>Forum/Bulletin Boards</li>
<li>Business Directories</li>
<li>Search Engine Friendly URLs</li>
<li>Many more&hellip;</li>
</ul>
<p>The full list of extensions can be found on the <a href="http://extensions.joomla.org/" target="_blank" rel="noopener noreferrer">Joomla website</a>.</p>
<h3>Cost</h3>
<p>Joomla is a Free. This is an advantage if most open source software. The developers make their money from donations, support, hosting and advertising. This allows them to release the actual software for free. It in turn means more people will use their software resulting in more donations, support, hosting and advertising. Clever.</p>
<h3>High Quality</h3>
<p>Because it&rsquo;s open source and free, thousands of developers have downloaded it, tested it and improved it. It is a continuous development and improvement process so updates and new versions are released often. This ensures the product is of high quality with bug fixes, security patches and extra features added often.</p>
<h3>Customisation</h3>
<p>With commerical and closed source software you are generally left using the software as is out of the box, and are at the mercy of the developer to make changes which is usually unlikely. Open source software means the code is open, so developers can access the code and change it. This means if the system needs to be changed to work how the website owner wants it to work, it can!</p>
<h3>Support</h3>
<p>With so many people using and developing with Joomla, the online support community is vast. Whatever question or issue a website owner has, it is likely the question has been asked and answered already and can be found with a simple search online. If not then there are many people ready to answer your question on the support forums.</p>
<h3>Good Content Structure</h3>
<p>The last I want to cover is such a bonus and great for sites with many pages&hellip; Content is organised into Sections and Categories. i.e. a Content page is categorised into a category. And that category is also put into a Section. This means all content can be categorised on the site. Why do that you ask?? It makes it a lot easier not only to manage content in the backend if you have many pages, but on the front end content page summaries can be displayed from certain categories. So for example, if I have a &ldquo;Latest News&rdquo; category, I can show a page on the site that shows a summary of all Latest News pages, with links to the complete articles via a Read More link. The site can also be configured to show the Latest News page title someone on the site such as the home page. So when adding a new Latest News page the page summary and title will appear automatically in the Latest News listing. It means website owners don&rsquo;t have to then go and add links to this pages in other areas of the site, it will automatically appear.</p>
<p>Oh, and of course this Latest News page can be shown as a RSS feed so users with an interest in your latest news can have these updates via their RSS reader automatically too.</p>
<p class="h2">Summary</p>
<p>The above advantages are just touching the surface of Joomla. In my opinion this system is an excellent content management system for those adding and editing content regularly, which as you know (?) is very good for search engines and should be part of any business operations.</p>
<p class="h2">What Next For You?</p>
<p>Whether you have a website and need a new content manager, or looking to build a new website, consider using Joomla as the content management system, you wont be disappointed. There are a vast amount of web developers capable of providing a Joomla system if you don&rsquo;t have the experience yourself.</p>`,
        date: '2009-05-13',
        category: 'CMS'
    },
    {
        slug: 'why-you-need-a-website-content-management-system-cms',
        title: 'Why You Need a Website Content Management System (CMS)',
        excerpt: 'One of the biggest issues I have with some web and graphic designers is that they still do not provide website content management systems (CMS) for clients and are still developing static websites in plain HTML. That means separate files for each webpage with the design and content embedded into each file (shivers run down spine). Not at all good for updating design or maintaining content.',
        content: `<p>One of the biggest issues I have with some web and graphic designers is that they still do not provide website content management systems (CMS) for clients and are still developing static websites in plain HTML. That means separate files for each webpage with the design and content embedded into each file <em>(shivers run down spine</em>). Not at all good for updating design or maintaining content.</p>
<p>Not all website owners are at fault&hellip; very often when networking and meeting website owners I explain what a CMS is and the advantages of using one and some of them have either not heard of a CMS or don&rsquo;t know the advantages of using one. So many of these website owners have static websites and complain &ldquo;<em>I can&rsquo;t update my website</em>&ldquo;, &ldquo;<em>the developer charges a lot to do so</em>&ldquo;, or &ldquo;<em>I cant get hold of the developer</em>&ldquo;. I get so frustrated hearing their woes because I know it does not have to be like this.</p>
<p>In my opinion it is vital, maybe even necessary, for a successful website to have a content management system. Without it the website will be left outdated or costly to keep updated. There are also other reasons that content management should be considered a requirement.</p>
<p>It should <strong>not</strong> cost more for a web developer to provide a content manager compared to a static website. In fact, it should even cost less due to the nature of design being separated from content if the developer is familiar with their CMS of choice. Only a few files need to be created to provide the design for every page.</p>
<p>So how do static and CMS websites compare?</p>
<p class="h2">Traditional Static Websites</p>
<p>Before the advent of server side scripting (e.g. ASP/PHP) websites were built in plain HTML. A separate file for each website page is required. This file will contain the entire website code including design, images, content, navigation etc. If you have 100 pages you will have 100 files. This is extremely disadvantageous:-</p>
<ul>
<li>Changing design or adding a menu items will take longer than using a CMS due to updating many files</li>
<li>The website owner cannot update content without HTML and/or HTML software knowledge, including FTP</li>
<li>Requesting the designer update content can turn out to be costly in the long run</li>
<li>No functionality like shopping carts, database systems, member registration and login etc.</li>
</ul>
<p>So what happens is the website is not updated, and could remain a static website with the same content for years. This is bad for users visiting the site (is the business still active? what has the business been up to? what&rsquo;s their latest work and clients? etc.) and bad for search engines (search engines like to see fresh and updated content).</p>
<p>Another disadvantage is the website does not usually do anything. It wont offer any user interaction such as a being able to sell products, collect potential customer information into a database etc.</p>
<p>The above disadvantages are eliminated with a website content manager.</p>
<p class="h2">Website Content Management Systems</p>
<h3>Design and Content Separated</h3>
<p>A content manager basically works as follows:-</p>
<ul>
<li>The design is generally made up of only a few files for the entire website.</li>
<li>The content is traditionally stored in a database and not the file system.</li>
<li>Based on the page name in website URL, the server side scripting (e.g. ASP/PHP) will feed the database content for that page into the design.</li>
</ul>
<p>What this means is the design files are separate from the content. Therefore updating the design, or adding new menu items, can be done in one file and not every single page. This ensures updating design is quick and easy. In fact the entire website can have a new, fresh design without having to rebuild the entire website, i.e. all content and menu pages stay the same and the design is change, thus saving more money and quick to publish.</p>
<h3>Website Owner Can Update Own Content</h3>
<p>The content manager then provides an administration interface for the website owner to login and use the easy to use editor to edit and add content into each page, and add new pages into the menu.</p>
<p>I always recommend a website is designed with a dynamic page listing for new content, i.e. a Latest News listing, a Testimonial listing, a Case Study or Portfolio listing. Using the editor the website owner can add a new page to the Latest News for example, and it will automatically be added to the Latest News listing and to the site. This not only shows a visitor that the business still there, changing, growing, dynamic etc. and keeps them up to date with the business news, but because search engines love new and changing content on websites, the website owner should see an improvement in rankings.</p>
<h3>Added Functionality</h3>
<p>In addition to the above many CMS&rsquo;s allow for additional functionality to be added on easily thus turning the website into something far more business orientated and actually interacting with users rather than be a static magazine. Here are some examples of common functionality that can be added:-</p>
<ul>
<li>Members Registration and Login with Member Only Pages</li>
<li>Forums/Discussion Boards</li>
<li>Document Managers</li>
<li>Dynamic Content for Latest News/Portfolio/Products/Case Studies/Testimonials</li>
<li>Many more</li>
</ul>
<h3>Search Engine Optimisation</h3>
<p>Using the editor important aspects of the website such as the browser title can be edited to ensure important keywords for your business and services are added. So many sites are just called something like &ldquo;Home&rdquo; which is extremely bad for search engines. So having the ability to update this and the Site Description is important.</p>
<p>Adding new content as stated above will also help improve rankings in search engines.</p>
<p class="h2">What Next For You?</p>
<p>If you have not got a website content manager or are looking for a new website then <strong>make sure you request your web designer or developer provide you one</strong>! If they do not know how then I would question their web development ability and should they really be developing a website for you? If thy quote a lot higher than making a static HTML site then I would also question their experience and knowledge of the CMS they would provide because it show not take any longer to develop a site using one than without.</p>`,
        date: '2009-05-12',
        category: 'CMS'
    },
    {
        slug: 'its-time-i-jumped-on-the-blogging-bandwaggon',
        title: 'It’s time I jumped on the blogging bandwagon',
        excerpt: 'With years of exeprience developing websites, it’s a big surprise to me I don’t blog about it. I have picked up a wealth of information about Web Design and Development, CSS, HTML, PHP, MySQL, Joomla, Zencart, Search Engine Optimisation (SEO), the internet and more! Hopefully I will add WordPress to this list. I am also a keen baker with CakePHP.',
        content: `<p>With years of exeprience developing websites, it&rsquo;s a big surprise to me I don&rsquo;t blog about it. I have picked up a wealth of information about <strong>Web Design and Development</strong>, <strong>CSS</strong>, <strong>HTML</strong>, <strong>PHP</strong>, <strong>MySQL</strong>, <strong>Joomla</strong>, <strong>Zencart</strong>, <strong>Search Engine Optimisation</strong> (<strong>SEO</strong>), the <strong>internet </strong>and <strong>more</strong>! Hopefully I will add <strong>WordPress </strong>to this list. I am also a keen baker with <strong>CakePHP</strong>.</p>
<p>So welcome to my blog. Here you can hopefully find useful information, hints and tips and news about web design, development, the internet, all the above and more&hellip;</p>
<p>Thanks</p>
<p>Laurie Cope</p>`,
        date: '2009-05-10',
        category: 'Amity News'
    },
    {
        slug: 'grant-funding-availability-in-caerphilly-for-websites-and-shopping-carts',
        title: 'Grant Funding Availability in Caerphilly for Websites and Shopping Carts',
        excerpt: 'The Local Investment Fund (LIF) can provide up to 40% of eligible expenditure up to a maximum of £10,000 (minimum grant £1000) toward the costs for the design, development and hosting of your website and/or shopping cart.',
        content: `<p>
	The Local Investment Fund (LIF) can provide up to <strong>40%</strong> of eligible expenditure up to a maximum of<strong> &pound;10,000</strong> (minimum grant &pound;1000) toward the costs for the design, development and hosting of your website and/or shopping cart.<br />
	<br />
	<a href="/contact-us/" target="_self" rel="noopener noreferrer">Contact Us</a> if you would like to know more information or help in applying for a grant.<br />
	<br />
	Other councils of areas we service offer grants for website also:</p>
<ul>
	<li>
		<a href="/blog/grant-funding-available-in-merthyr-tydfil-for-websites-and-shopping-carts/">Merthyr Tydfil Grants</a></li>
	<li>
		Rhondda Cynon Taff Grants</li>
	<li>
		Newport Grants</li>
	<li>
		Torfaen Grants</li>
	<li>
		Blaenau Gwent Grants</li>
</ul>
<p>
	<a href="/contact-us/" target="_self" rel="noopener noreferrer">Contact Us</a> if you would like to know more information or help in applying for a grant.</p>`,
        date: '2009-04-22',
        category: 'Amity News'
    },
    {
        slug: 'our-caerphilly-bisnet-presentation-on-free-website-tools-was-a-success',
        title: 'Our Caerphilly Bisnet Presentation on Free Website Tools Was a Success',
        excerpt: 'Our presentation at the Caerphilly Bisnet Club on Tuesday 2nd December 2008 was a great success. The presentation, "How to Use Free Tools To Improve Your Website" was presented to local businesses by Laurence Cope with the aim of introducing the excellent free open source tools available on the internet that can be used to improve their websites.',
        content: `Our presentation at the Caerphilly Bisnet Club on Tuesday 2nd December 2008 was a great success. The presentation, "<strong>How to Use Free Tools To Improve Your Website</strong>" was presented to local businesses by Laurence Cope with the aim of introducing the excellent free open source tools available on the internet that can be used to improve their websites.

The presentation covered the following topics:
<ul>
 	<li>Open Source Software</li>
 	<li>The Free Content Management System (Joomla)</li>
 	<li>Free Website Add-Ons Available for Joomla</li>
 	<li>A Demonstration</li>
</ul>
<p class="h2">Caerphilly Bisnet</p>
Caerphilly Bisnet is a free and independent ICT service provided by<strong> Caerphilly County Borough Council (CCBC)</strong> to help local businesses apply IT solutions both in the office and online.

They provide advice on hardware, software, websites, ecommerce and internet applications. Demonstrations of Open Source and commercial applications are available in our ICT centre.`,
        date: '2008-12-05',
        category: 'Amity News'
    },
    {
        slug: 'weve-joined-4networking-business-networking-caerphilly',
        title: 'We&#8217;ve Joined 4Networking, Business Networking Caerphilly',
        excerpt: '4Networking is a continuously expanding and vibrant breakfast networking group that allows businesses to network over a delicious breakfast in a non-formal, fun and social way. Allowing people to meet other local businesses will ensure an increase in local exposure leading to more customers and quality suppliers for your business. The online forum is a great way to meet like minded people to do business with further afield.',
        content: `<p>4Networking is a continuously expanding and vibrant breakfast networking group that allows businesses to network over a delicious breakfast in a non-formal, fun and social way. Allowing people to meet other local businesses will ensure an increase in local exposure leading to more customers and quality suppliers for your business. The online forum is a great way to meet like minded people to do business with further afield. <br /> <br />Amity Web Solutions have just joined 4Networking Caerphilly. You can view our profile here <a href="http://www.4networking.biz/members/view.htm?UserID=23074" target="_blank" rel="noopener noreferrer">http://www.4networking.biz/members/view.htm?UserID=23074</a>.</p>`,
        date: '2008-10-13',
        category: 'Amity News'
    },
    {
        slug: 'amity-are-accepted-onto-the-best-of-caerphilly-business-directory',
        title: 'Amity are accepted onto the Best Of Caerphilly Business Directory',
        excerpt: 'We are proud to announce our acceptance onto the Best of Caerphilly Business Directory and guide. The Best of Caerphilly only accepts the top 5 suppliers to be listed in their business directory, so we are very happy that we have achieved this status. It\'s very important to us that we provide the best service possible to all our clients before, during and after projects are completed, so this listing is testimonial to that.',
        content: `<p>We are proud to announce our acceptance onto <strong>the Best of Caerphilly Business Directory</strong> and guide. The Best of Caerphilly only accepts the top 5 suppliers to be listed in their business directory, so we are very happy that we have achieved this status. It's very important to us that we provide <strong>the best service</strong> possible to all our clients before, during and after projects are completed, so this listing is testimonial to that. <br /> <br />You can visit our listing on the Best of Caerphilly <a href="http://www.thebestof.co.uk/caerphilly/67031/1/1/the_best_of.aspx" target="_blank" rel="noopener noreferrer">here</a>.</p>`,
        date: '2008-09-20',
        category: 'Amity News'
    },
];

/*----------------------------------------
Helper function to get a post by slug
----------------------------------------*/
export function getPostBySlug(slug: string): BlogPost | undefined
{
    return blogPosts.find(post => post.slug === slug);
}

/*----------------------------------------
Helper function to get paginated posts
----------------------------------------*/
export function getPaginatedPosts(page: number = 1, perPage: number = 12): { posts: BlogPost[], totalPages: number }
{
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const posts = blogPosts.slice(start, end);
    const totalPages = Math.ceil(blogPosts.length / perPage);
    
    return { posts, totalPages };
}

/*----------------------------------------
Helper function to get posts by category
----------------------------------------*/
export function getPostsByCategory(category: string): BlogPost[]
{
    return blogPosts.filter(post => post.category === category);
}

/*----------------------------------------
Get all unique categories
----------------------------------------*/
export function getCategories(): string[]
{
    const categories = new Set(blogPosts.map(post => post.category).filter(Boolean));
    return Array.from(categories) as string[];
}