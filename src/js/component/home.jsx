
import React, { useCallback, useState, useRef } from 'react';

import { Calendar } from '@natscale/react-calendar';

import '@natscale/react-calendar/dist/main.css';

const monthsLabel = {
	0: 'Enero',
	1: 'Febrero',
	2: 'Marzo',
	3: 'Abril',
	4: 'Mayo',
	5: 'Junio',
    6: 'Julio',
 	7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre',
};

const weekDaysLabel = {
	0: 'Dom',
	1: 'Lun',
	2: 'Mar',
	3: 'Mie',
	4: 'Jue',
	5: 'Vie',
	6: 'Sab',
  };

  export default function App() {
	const [value, setValue] = useState(new Date());
  
	const onChange = useCallback(
	  (val) => {
		setValue(val);
	  },
	  [setValue],
	);
  
	return <Calendar size={420} fontSize={18} useDarkMode initialView="months" isMultiSelector weekDaysLabel={weekDaysLabel} monthsLabel={monthsLabel} value={value} onChange={onChange} />;
  }




