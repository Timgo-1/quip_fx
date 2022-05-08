import styled from 'styled-components';
import { Column } from '../../globalStyles.js';
import IconBg from '../../iconbg.png';

export const PhoneColumn = styled(Column)`
	z-index: 99;
	width: 33%;
	@media screen and (max-width: 768px) {
		width: 70%;
	}
`;

export const BgIcon = styled.img.attrs({
  src: `${IconBg}`
	})`
	position: absolute;
	top: 125%;
	z-index: 0;
	width: 99vw;
	height: 160vh;
	opacity: 0.25;
}
`;