import React from 'react'
import PropTypes from 'prop-types'
import Networks from '../molecules/Networks'
import Availability from '../molecules/Availability'
import Location from '../molecules/Location'

import Button from '../atoms/Button'

import LogoUnit from '../molecules/LogoUnit'
import { header, minimal as styleMinimal, meta } from './Header.module.css'
import { useMeta } from '../../hooks/use-meta'
import { Typewriter } from 'react-simple-typewriter'

Header.propTypes = {
  minimal: PropTypes.bool,
  hide: PropTypes.bool
}

export default function Header({ minimal, hide }) {
  const { availability } = useMeta()

  return (
    <header className={minimal ? styleMinimal : header}>
      {!hide && (
        <>
          <LogoUnit minimal={minimal} />
          <Networks hide={minimal} />
          <div className="typewriter" hide={minimal}>
            <Typewriter
              words={['Eat', 'Sleep', 'Code', 'Repeat!']}
              loop={5}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <Button className="button" href="/resume">
            <span>Resume</span>
          </Button>
          <div className={meta}>
            {/* <Availability hide={minimal && !availability.status} /> */}
          </div>
        </>
      )}
    </header>
  )
}
