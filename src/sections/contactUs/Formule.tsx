'use client'
export default function Formule() {
    return(
            <form className={'flex flex-col gap-8'}>
                <input className={'py-4 px-5 rounded-md'} type={'text'} name={''} placeholder={'Imię'}/>
                <div className={'flex gap-6'}>
                    <input className={'w-full py-4 px-5 rounded-md'} type={'email'} name={''} placeholder={'Email'}/>
                    <input className={'w-full py-4 px-5 rounded-md'} type={'email'} name={''} placeholder={'Email'}/>
                </div>
                <input className={'py-4 px-5 rounded-md'} type={'text'} name={''} placeholder={'Temat'}/>
                <textarea className={'py-4 px-5 rounded-md'} rows={6} placeholder={'Wiadomość'}></textarea>


                <button className={'bg-red-600 text-white py-4 rounded-3xl'}>Wyślij</button>
            </form>
    );
}