import HeadNav from '../../components/Navbar';
import {Container} from 'react-bootstrap';
import Footer from '../../components/Footer';
import ProteinCard from '../../components/ProteinCard';


function ProjectPage() {
    return (
        <>
            <HeadNav/>
            <div className='pt-5'></div>
            <Container id='start' className='justify-content-center'>
                <ProteinCard/>
                <ProteinCard/>
                <ProteinCard/>
                <ProteinCard/>
            </Container>
        </>
    )
}
export default ProjectPage