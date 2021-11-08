import '../styles/layout/CvPdf.scss';

const CvPdf = () => {
    return (
        <section id="cv_pdf" className="cv_pdf">
            <h2 className="cv_pdf_title">CV en PDF</h2>
            <a href="https://drive.google.com/drive/folders/1sfdDxitw0VP0ki2lvhRHEt5J0osik0eQ?usp=sharing" target="_blank" rel='noreferrer' title="Ir a CV en PDF" className="cv_pdf_link">
                <i class='bx bxs-file-pdf cv_pdf_icon'></i>
            </a>
        </section>
    )
}
export default CvPdf;