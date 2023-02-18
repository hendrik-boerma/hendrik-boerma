import linkedin from '../images/icons/linkedin.png'
import mail from '../images/icons/mail.png'

function Footer () {


    return (
        <footer className='p-16 bg-black h-96'>
        <h3 className='text-3xl md:text-4xl font-futura flex justify-center'>Contact</h3>
            <div className='flex flex-row items-center justify-center gap-24 md:flex-wrap'>
                <div className='flex gap-12 py-16 cursor-pointer md:flex-wrap'>
                    <i className="w-20 cursor-pointer"><a href='https://www.linkedin.com/in/hendrik-boerma' ><img src={linkedin} alt='linkedinicon'/></a></i>
                    <i className="w-20 cursor-pointer"><a href='mailto:hendrikboerma@gmail.com' ><img src={mail} alt='mailicon'/></a></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;