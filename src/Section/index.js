import { SectionList, SectionHeader, SectionTitle, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionList>
        <SectionHeader>
            <SectionTitle>
                {title}
            </SectionTitle>
            {extraHeaderContent}
        </SectionHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </SectionList>
)

export default Section;