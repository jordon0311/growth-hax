import ContactForm from "../components/ContactForm"

import { ReturnedDataType } from '../types.types';

const ContactsPage = (props: { data: ReturnedDataType }) => {
    return (
        <div id="contact" className="lg:flex flex-col gap-2 lg:h-screen items-center justify-center w-screen">
            <ContactForm data={props.data} />
        </div >
    )
}

export default ContactsPage