import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Customer Complaints Process',
    description: 'Our customer complaints process at Amity Web Solutions. We take all complaints seriously and aim to resolve issues promptly.',
};

/*----------------------------------------
Customer Complaints Process Page
----------------------------------------*/
export default function CustomerComplaintsPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Customer Complaints Process</h1>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="prose prose-lg max-w-4xl">
                        <p>We at Amity Web Solutions are very proud of our exceptional customer service and customer loyalty and feedback. We believe customer service and satisfaction is key in ensuring our business continues to thrive in Web Design and Development services. With this in mind we are only human and although striving for the highest of standards, it is a possibility that a customer may not be as satisfied with our service as we would hope.</p>
                        
                        <p>We have therefore put in place a customer complaints process to ensure all complaints received are dealt with as fairly and quickly as possible.</p>
                        
                        <h2>How to Make a Complaint</h2>
                        
                        <p>If you are dissatisfied with any aspect of our service, please contact us in the first instance using one of the following methods:</p>
                        
                        <ul>
                            <li><strong>Email:</strong> <a href="mailto:info@amityweb.co.uk" className="text-[var(--primary)]">info@amityweb.co.uk</a></li>
                            <li><strong>Phone:</strong> <a href="tel:02920886582" className="text-[var(--primary)]">029 2088 6582</a></li>
                            <li><strong>Post:</strong> Amity Web Solutions, Ty Merlin, Caerphilly Business Park, Caerphilly, CF83 3GS</li>
                        </ul>
                        
                        <p>Please provide as much detail as possible about your complaint, including:</p>
                        
                        <ul>
                            <li>Your name and contact details</li>
                            <li>The nature of your complaint</li>
                            <li>Any relevant dates, times and reference numbers</li>
                            <li>What outcome you are seeking</li>
                        </ul>
                        
                        <h2>Our Process</h2>
                        
                        <ol>
                            <li><strong>Acknowledgement:</strong> We will acknowledge your complaint within 2 working days</li>
                            <li><strong>Investigation:</strong> We will investigate your complaint thoroughly and fairly</li>
                            <li><strong>Response:</strong> We aim to provide a full response within 10 working days. If this is not possible, we will contact you to explain why and provide a revised timescale</li>
                            <li><strong>Resolution:</strong> We will work with you to find a fair resolution to your complaint</li>
                        </ol>
                        
                        <h2>If You Are Not Satisfied</h2>
                        
                        <p>If you are not satisfied with our response to your complaint, you may escalate the matter to the company director by writing to the address above, marking your letter &quot;For the attention of the Director&quot;.</p>
                        
                        <p className="mt-8">
                            <Link href="/contact" className="text-[var(--primary)] hover:underline">
                                Contact us
                            </Link> if you have any questions.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
