<!DOCTYPE html>

<head>

	<title>Email Signatures</title>

	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="index, follow, noodp, noydir" />

	<style>
	body
	{
		font-family: arial, helvetica;
	}
	.container
	{
		margin: auto;
		overflow: hidden;
		padding: 20px;
		margin-top: 10px;
	}
	</style>
	
</head>

<body>

	<div class="container">


<?php

$contacts = array(
	array(
		'name' => 'Laurence Cope',
		'phone' => '029 2088 6582',
		'position' => 'Director',
		'email' => 'laurence@amityweb.co.uk',
	),
	array(
		'name' => 'Kiran Kerai',
		'phone' => '029 2088 6582',
		'position' => 'Web Developer',
		'email' => 'kiran@amityweb.co.uk',
	),
	/*array(
		'name' => 'Mike Watkins',
		'phone' => '07884 231242',
		'position' => 'Sales & Marketing',
		'email' => 'mike@amityweb.co.uk',
	),
	array(
		'name' => 'Alex Richards',
		'phone' => '029 2088 6582',
		'position' => 'Web Developer',
		'email' => 'alex@amityweb.co.uk',
	),
	array(
		'name' => 'Phil Page',
		'phone' => '029 2088 6582',
		'position' => 'Web Developer',
		'email' => 'phil@amityweb.co.uk',
	),*/
);

$vars = array(
	'company_name' => 'Amity Web Solutions Ltd',
	'address' => 'Britannia House, Caerphilly Business Park, Caerphilly, CF83 3GG',	
	'website' => 'http://www.amityweb.co.uk/',
	'twitter' => 'https://twitter.com/AmityWeb',
	'facebook' => 'https://www.facebook.com/amityweb',
	'linkedin' => 'https://www.linkedin.com/company/amity-web-solutions-ltd',
	'instagram' => 'https://www.instagram.com/amityweb/',
);
	
	


echo '<div style="background: #efefef; padding: 20px;">Click your name to jump to your signature, then using your mouse (or finger on touchscreen devices) select the signature between the lines, then copy and paste into your email client. Instructions to add to various email clients <a href="#instructions">are at the bottom</a>.<br/><br/>';
$i=0;
foreach($contacts AS $contact)
{
	echo '<a href="#sig'.$i.'">'.$contact['name'].'</a><br/>';
	$i++;
}
echo '</div><hr/>';

$i=0;
foreach($contacts AS $contact)
{

	$output = '
		<a name="sig'.$i.'"></a>
		<br/>
		<span style="font-size:11px;font-family:verdana,geneva,sans-serif;">
		<strong>'.$contact['name'].'</strong><br />
		'.$contact['position'].', '.$vars['company_name'].'<br />
		<br />
		t: <a href="tel:'.str_replace(' ','',$contact['phone']).'">'.$contact['phone'].'</a><br />
		e: <a href="mailto:'.$contact['email'].'" target="_blank">'.$contact['email'].'</a><br />
		w: <a href="'.$vars['website'].'" target="_blank">'.$vars['website'].'</a><br />
		a: '.$vars['address'].'<br /><br />
		
		</span>
		
		
		<a href="'.$vars['website'].'" style="text-decoration: none;" target="_blank"><img alt="Amity Website" height="30" src="'.get_url().'amity-logo-black.png" style="vertical-align: middle; border: 0;" width="152" /></a>&nbsp;&nbsp;
		
		<a href="'.$vars['twitter'].'" style="text-decoration: none;" target="_blank"><img alt="Amity on twitter" src="'.get_url().'icon-twitter1.png" width="20" height="30" style="vertical-align: middle; border: 0;" /></a>
		
		<a href="'.$vars['facebook'].'" style="text-decoration: none;" target="_blank"><img alt="Amity on facebook" src="'.get_url().'icon-facebook1.png" width="20" height="30" style="vertical-align: middle; border: 0;" /></a>
		
		<a href="'.$vars['linkedin'].'" style="text-decoration: none;" target="_blank"><img alt="Amity on linkedin" src="'.get_url().'icon-linkedin1.png" width="20" height="30" style="vertical-align: middle; border: 0;" /></a>
		
		<a href="'.$vars['instagram'].'" style="text-decoration: none;" target="_blank"><img alt="Amity on Instagram" src="'.get_url().'icon-instagram1.png" width="20" height="30" style="vertical-align: middle; border: 0;" /></a>
		
		
		<br /><br />

	
	';
	
	echo $output;
	
	echo '<br/><hr/><br/>';
	
	echo '<p>If you need to use HTML in your signature, copy and paste this:<p>';
	
	echo '<div style="background: #efefef; font-size: 11px; padding: 20px; font-family: courier;">';
	echo nl2br(htmlspecialchars($output));
	echo '</div>';
	
	echo '<br/><hr/><br/>';
	
	$i++;
}


?>

<a name="instructions"></a>
<h2>Instructions</h2>
	
<p>If you are using an email client to access your domain emails, you can create personalized signatures for your email messages. You can include text, images, your electronic business card, a logo or even an image of your handwritten signature.&nbsp;</p><p><strong>Note</strong>: If you use both an email client and your Doteasy webmail, you will need to create a signature in each. The email signature you create in your webmail will not be transferred or applied to email messages you send using an email client, and vice versa.</p>

<h2>Creating Email Signature in Thunderbird:</h2>

<ol><li>Open your Thunderbird application and select <strong>Tools</strong>.</li><li>Select <strong>Account Settings</strong>.</li><li>In the <em>Signature Text</em> section enter your signature message into the message box.&nbsp;</li><li>When ready, click <strong>OK</strong> to save the signature message.</li></ol><h2>Creating Email Signature in MacMail:</h2><ol><li>Open your Mac Mail application and select <strong>Preferences</strong>.</li><li>Click <strong>Signatures</strong>.</li><li>If you have more than one email account set up on your MacMail email client, select the account for which you want to create a signature from the left column.</li><li>Click the <strong>+</strong> icon near the bottom of the <em>Signatures</em> window.</li><li>In the middle column, enter a name for the signature.</li><li>MacMail will create a default signature for you based on the email account you selected. You can replace the default signature text by entering your new signature message in the preview panel in the right column.</li><li>If you want to add an image or vCard file to your signature, drag the image or vCard file into the <em>Signatures</em> window.&nbsp;</li><li>Check the <strong>Always match my default message font</strong> option if you want your signature to match the default font in your messages.</li><li>If you want your signature to appear after the original text of message your reply to or forward, deselect the <strong>Place signature above quoted text</strong> checkbox.</li></ol><h2>Creating Email Signature in Outlook 2016:</h2><p>You can create multiple email signatures in Outlook – one for each email account or a different signature for different replies.</p><ol><li>Open your Outlook application and click <strong>New Email</strong> from the <em>Home</em> tab.</li><li>Click <strong>Signature</strong> and select <strong>Signatures</strong> on the <em>Message</em> tab.</li><li>Click the <strong>New</strong> button in the <em>Signatures and Stationery</em> window.</li><li>Enter a name for the signature and click <strong>OK</strong>.&nbsp;</li><li>Enter your signature in the <strong>Edit Signature</strong> box. You can use the formatting toolbar to change the appearance of any text you add.&nbsp;</li><li>When ready, click <strong>OK</strong>.</li></ol><p>This will be the default signature for new emails sent from your Outlook application.</p><h2>Creating Email Signature in Windows 10 Mail:</h2><p>Mail for Windows 10 comes with a default signature: <em>Sent from Mail for Windows 10</em>.&nbsp;</p><ol><li>Open your Windows 10 Mail application.</li><li>Choose <strong>Settings</strong> and select <strong>Signature</strong>.</li><li>Select an account or check the <strong>Apply to all accounts</strong> option.</li><li>Ensure the <strong>Use an email signature</strong> slider is set to <strong>On</strong>, and enter your signature. You can enter multiple lines of text. However, you can’t create hyperlinks, change the font or font color of your signature or add images.</li><li>Your signature is saved automatically.</li></ol><h2>Creating Email Signature in Windows Live Mail:</h2><ol><li>Open your Windows Live Mail application and click <strong>Tools</strong>.</li><li>Select <strong>Options &gt; Mail</strong>.</li><li>Click on the <strong>Signatures</strong> tab.</li><li>Click <strong>New</strong> under <em>Signatures</em>.</li><li>Enter your signature message in the message box under <em>Edit Signature</em>.</li><li>When ready, click <strong>OK</strong>.</li></ol><p><strong>Note</strong>: By default, Windows Live Mail won’t automatically append signature blocks to your emails – you will need to manually add a signature.&nbsp;</p><ol><li>On the <strong>New Message</strong> compose panel, click on the <strong>Insert</strong> tab.</li><li>Click on the <strong>Signature</strong> button and choose the one you want to append to your email message.</li></ol><p>You can also change the behavior in your Windows Live Mail’s option menu.&nbsp;</p><ul><li>To automatically insert a signature to all new messages you compose, check the <strong>Add signatures to all outgoing messages</strong> option.</li><li>If you want to include your signature in all mail you send (vs. new messages only), uncheck the <strong>Don’t add signatures to Replies and Forwards</strong> option.</li></ul><p>&nbsp;</p><h2>Creating Email Signature in Microsoft Office 365:</h2><ol><li>Go to <a href="https://go.microsoft.com/fwlink/p/?LinkID=402333" target="_blank">Office 365 sign-in</a>&nbsp;and sign in to your account.&nbsp;</li><li>Click on the <strong>App launcher</strong> and select <strong>Outlook</strong>.</li><li>From the nav bar, choose <strong>Settings</strong> and select <strong>Options</strong>.</li><li>Under <strong>Options</strong>, choose <strong>Settings</strong> and select <strong>Mail</strong>.</li><li>Choose <strong>Layout</strong> and select <strong>Email Signature</strong>.</li><li>Under <strong>Email Signature</strong>, in the text box, enter your signature message. You can use the formatting toolbar to change the appearance of the signature.</li><li>If you want your signature to display at the bottom of all outgoing email messages (including replies and forwards), select <strong>Automatically include my signature on messages I send</strong>. If you don’t select this option, you can manually add your signature to any message by using the <strong>Insert &gt; Signature</strong> function on the compose new message panel.</li><li>When ready, click <strong>Save</strong>.</li></ol>



	</div>
	
</body>
</html>


<?php
function get_url()
{
	$path = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://") . $path;
	return $url;
}

?>



