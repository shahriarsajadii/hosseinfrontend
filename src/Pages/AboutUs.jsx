import React from 'react';
import { Link } from 'react-router-dom';
import AboutBanner from '../Components/AbousUs/AboutBanner';
import AboutStory from '../Components/AbousUs/AboutStory';
import AboutTeam from '../Components/AbousUs/AboutTeam';
import AboutInvite from '../Components/AbousUs/AboutInvite';
import AnimatedSection from '../AnimatedSection';
console.log("salllammm")
export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen  text-gray-800 " dir="rtl">
      <AnimatedSection>
        <AboutBanner />
      </AnimatedSection>

      <AnimatedSection direction='right'>
        <AboutStory />
      </AnimatedSection>

      <AnimatedSection direction='left'>
        <AboutTeam />
      </AnimatedSection>

      <AnimatedSection>
        <AboutInvite />
      </AnimatedSection>
    </div>
  );
}
