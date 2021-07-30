import React from 'react';
import classNames from 'classnames';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import { Button } from 'components/Button';
import Section from 'components/Section';
import Icon from 'components/Icon';
import Heading from 'components/Heading';
import Text from 'components/Text';
import { useScrollRestore, useFormInput, useRouteTransition } from 'hooks';
import { reflow, isVisible } from 'utils/transition';
import prerender from 'utils/prerender';
import './index.css';
import axios from 'axios';

const Contact = () => {
  const { status } = useRouteTransition();
  useScrollRestore();

  return (
    <Section className={classNames('contact', `contact--${status}`)}>
      <Helmet>
        <title>Contact | C Pallavi</title>
        <meta
          name="description"
          content="Send me a message if you’re interested in discussing a project or if you just want to say hi"
        />
      </Helmet>
      <TransitionGroup component={null}>
        <Transition appear mountOnEnter unmountOnExit timeout={1600} onEnter={reflow}>
          {status => (
            <form className="contact__form" method="post">
              <Heading
                className={classNames('contact__title', `contact__title--${status}`, {
                  'contact__title--hidden': prerender,
                })}
                level={3}
                as="h1"
              >
                <DecoderText
                  text="CONTACT"
                  start={status !== 'exited' && !prerender}
                  delay={300}
                />
                <Text
                  className={classNames(
                    'contact__description',
                    `contact__description--${status}`
                  )}
                  size="l"
                >
                  Send me a message if you’re interested in discussing a project or if you
                  just want to say hi
                </Text>
              </Heading>
              <Divider
                className={classNames('contact__divider', `contact__divider--${status}`, {
                  'contact__divider--hidden': prerender,
                })}
              />
              <Button
                className={classNames('contact__button', `contact__button--${status}`, {
                  'contact__button--hidden': prerender,
                })}
                loadingText="Sending..."
                icon="send"
                type="submit"
              >
                <a class="contact_mailto" href="mailto:pallavichandrasekar19@gmail.com">
                  Send Message
                </a>
              </Button>
            </form>
          )}
        </Transition>
      </TransitionGroup>
    </Section>
  );
};

export default Contact;
