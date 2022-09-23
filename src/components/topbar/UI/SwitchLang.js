import React, { useContext } from 'react'
import LangContext from '../../../store/LangContext'
import PropTypes from 'prop-types'

export default function SwitchLang ({ className }) {
  const { lang, toggleLang } = useContext(LangContext)
  const classes = className || 'w-12'

  const enLang = (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACUklEQVR4nO3ZzUtUURjH8d9cEsIRfCEyIwm0Fx3ITZsWBW2EFi4yXTnQLmjbMoKgRfQvtEoYSAQxWlQE0R9Q0KpCwxcYJsaFiKFd7cXmthiaMr0zFnPvc+74/azmcmbgzP1x7znPcyQAAAAAAAAAAAAAQKNK/XkRBEHq4pVnJavJ/Iuna3esp/BfWl6+3nbPPauJoIwAjBGAsZoBZEd6zcYHMh06099e9fdJVzWAvhOtupY9rcypNpPxseEejQ1XDzDpdt0FdR9N6+7NszrWlZbnpVQqBfq45OvWvTcqFH1FPX79ap+GBrvVkm6SJH32v+vJi4Lu52Yrc51+cD7eO1Unh9pba++CCkVf45Nz8rzydz0vpfHJORWKfizjuan5yudf389NzdfpFrgl9BX0/sPqtut3s6uxjW9sbmkxv165Xsyva2NzK2yqiXYgbODI4WZNPFrQ4+d5Xb50XF2dzVpe+RLb+NdvP3Tj9itJ0oVznXX90y5JbCXc0GsA4hP6CvpbdqRXD6cXTMYHMh0KgkBvZ36vEwdHB/cwa/ft6QmgHohO1TXA5XpgX3RDqQeiV/MVRD0QrZqLMPVAtKgDYkYd4BjOA4xxHmCM84CYcR7gmNBtqAv7//6T5VfTbvv/RukFcR5gLLF1wL7oBSF6BGCMAIztWANWPq0lYg1IKnpBjiEAYwRgjACMEYCxHa2IRumxJAVPgDECMEYAxgjAGAEYoxcUM3pBjiEAYwRgjACMEYAxekHGeAKMEYAxAjBGAMYIAAAAAAAAAAAAAAAAABH4Caamjimce64PAAAAAElFTkSuQmCC"
      alt="country flag"
      className={classes}
    />
  )

  const idLang = (
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA0UlEQVR4nO3asQ3CQBQFwTMNICTaoXq3g4SowA6IsGNrLZgJL/q6Td8YAAAAAAAA8Mum7cPyGEtxyL+Y5u8/v1SH8CFATICYADEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYADEBYrt19PP1to4+0P12tY4+EwFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkAAAAAAAAAHGgF/D4Hd2p/p44AAAAASUVORK5CYII="
      alt="country flag"
      className={classes}
    />
  )

  return <button onClick={toggleLang}>{lang === 'id' ? enLang : idLang}</button>
}

SwitchLang.propTypes = {
  className: PropTypes.string
}
