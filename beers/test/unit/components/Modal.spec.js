// Modal.spec.js
import React from 'react'
import renderer from 'react-test-renderer'

import Modal from '../../../src/components/Modal'

describe('Modal component', () => {
  test('render Modal component without crashing', () => {
    const title = 'Hey a modal title'
    const body = 'This is the modal body text'

    const tree = renderer.create(
      <Modal title={title} body={body} callback={null}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('render Modal component with callback', () => {
    const title = 'Hey a modal title'
    const body = 'This is the modal body text'
    const callback = jest.fn()

    const tree = renderer.create(
      <Modal title={title} body={body} callback={callback}/>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

})
