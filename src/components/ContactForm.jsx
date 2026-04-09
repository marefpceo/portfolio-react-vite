import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router';

const inputStyle =
  'border border-nature-light/65 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-nature-accent';

function ContactForm() {
  const [state, handleSubmit] = useForm('xzdkozyj');
  const navigate = useNavigate();

  if (state.succeeded) {
    navigate('/', { replace: false });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='mx-auto w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 flex flex-col gap-4 rounded-md bg-nature-altLight text-nature-dark font-brunoAce 
        [&>div>input]:rounded-xs [&>div>textarea]:rounded-xs'
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            className={inputStyle}
            min={2}
            required
          />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            className={inputStyle}
            required
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div className='flex flex-wrap justify-between items-center lg:items-start [&>select]:rounded-xs'>
          <label htmlFor='subject'>Subject</label>
          <select name='subject' id='subject' className={inputStyle}>
            <option value='general'>General Inquiry</option>
            <option value='project'>Project Inquiry</option>
            <option value='job'>Job Opportunity</option>
            <option value='volunteer'>Volunteer Opportunity</option>
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            className={inputStyle}
            minLength={2}
            required
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>

        <div
          className='button-div mx-auto my-5 p-2 rounded-md border border-nature-dark hover:bg-nature-dark 
          hover:text-nature-light hover:border-nature-accent hover:shadow hover:shadow-nature-accent'
        >
          <button type='submit' disabled={state.submitting}>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
