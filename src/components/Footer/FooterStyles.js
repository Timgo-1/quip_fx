import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';
import Icon from '../../icon.png';

export const FooterSection = styled.div`
	color: #18ffff;
	padding: 60px;
	background-image: url('/images/footer.svg');
	background-size: cover;
	background-repeat: no-repeat;

	@media screen and (max-width: 720px) {
		padding: 20px;
	}
`;

export const FtIcon = styled.img.attrs({
  src: `${Icon}`
})`
width: 65px;
height: 65px;
margin-left: -15px;
margin-right: -10px;
}
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	font-weight: bold;
	justify-content: space-between;
	padding: 10px 30px;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;

export const IconRow = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-top: 1rem;
	cursor: pointer;

	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;
export const FooterColumn = styled(Column)`
	margin: 1rem 2rem;
	@media screen and (max-width: 720px) {
		text-align: center;
	}
`;

export const Link = styled.a`
	text-decoration: none;
	margin-bottom: 1rem;
	color: #dce775;
	padding-bottom: 3px;

	&:hover {
		color: #a5d6a7;
		border-bottom: 1px solid #dcdcdc;
		transition: border 0.5s ease-out;
	}
`;
