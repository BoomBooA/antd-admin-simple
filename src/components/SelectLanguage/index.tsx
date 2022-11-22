import React from 'react'
import { getI18n } from 'react-i18next'
import { Dropdown, MenuProps } from 'antd'
import get from 'lodash/get'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

const SelectLanguage: React.FC = () => {
  const i18n = getI18n()
  const resources = i18n.options.resources || {}

  // render language list
  const dropdownItems: MenuProps['items'] = Object.keys(resources).map(language => ({
    key: language,
    label: get(resources, `${language}.translation.language`, '') as String,
    onClick: () => i18n.changeLanguage(language)
  }))

  return (
    <Dropdown
      className='cursor-pointer ml-2 mr-4'
      overlayClassName='w-40'
      menu={{
        items: dropdownItems,
        selectable: true,
        defaultSelectedKeys: [i18n.language]
      }}
    >
      <FontAwesomeIcon
        className='text-xl'
        icon={faLanguage}
      />
    </Dropdown>
  )
}

export default SelectLanguage
