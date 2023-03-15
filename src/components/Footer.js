import linkedin from '../Images/icons/linkedin.png'
import mail from '../Images/icons/mail.png'

function Footer () {


    return (
        <footer className='p-16 w-full h-96 bg-darkblue flex flex-col items-center text-center'>
            <h3 className='text-4xl font-futura text-offwhite font-bold'>Contact</h3>
                <div className='flex flex-row items-center justify-center gap-24 md:flex-wrap'>
                    <div className='flex gap-12 py-16 cursor-pointer md:flex-wrap'>
                        <i className="w-16 cursor-pointer hover:scale-110 ease-in duration-300"><a href='https://www.linkedin.com/in/hendrik-boerma' ><img src={linkedin} alt='linkedinicon'/></a></i>
                        <i className="w-16 cursor-pointer hover:scale-110 ease-in duration-300"><a href='mailto:hendrikboerma@gmail.com' ><img src={mail} alt='mailicon'/></a></i>
                    </div>
                </div>
            <p className='text-offwhite text-xs'>Portfolio by Hendrik Boerma</p>
        </footer>
    );
}

export default Footer;