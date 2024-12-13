function Paragraph() {

    const paragraph = {
        block: {
          normal: ({ children }) => (
            <p className='text-md leading-relaxed font-regular text-textcolor'>
              {children}
            </p>
          )
        }
      };

    return paragraph
}

export default Paragraph;