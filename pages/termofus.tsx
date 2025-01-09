import React from "react";

const TermsOfUse = () => {
  const emailContact = () => {
    window.location.href = "mailto:jannahadhaninfo@gmail.com";
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
        Terms of Use for Jannah App
      </h1>
      <p style={{ fontStyle: "italic", textAlign: "center" }}>
        Last updated: Sep 10, 2024
      </p>
      <p>
        Welcome to Jannah ("us", "we", or "our") mobile application. By
        downloading, installing, and using the Jannah App, you agree to be
        bound by these Terms of Use. If you do not agree with any part of these
        terms, please do not use the App.
      </p>
      <h2 style={{ fontWeight: "bold" }}>1. Use of the App</h2>
      <p>
        You may use the Jannah App solely for personal, non-commercial purposes
        and in accordance with these Terms of Use and all applicable laws and
        regulations. You are responsible for ensuring that your use of the App
        complies with all relevant laws and regulations.
      </p>
      <h2 style={{ fontWeight: "bold" }}>2. Account Registration</h2>
      <p>
        In order to access certain features and functionalities of the Jannah
        App, you may be required to create an account. When creating an
        account, you agree to provide accurate, current, and complete
        information. You are solely responsible for maintaining the
        confidentiality of your account credentials and for any activities that
        occur under your account.
      </p>
      <h2 style={{ fontWeight: "bold" }}>3. User Content</h2>
      <p>
        The Jannah App may allow you to post, submit, or share content,
        including but not limited to comments, feedback, and suggestions ("User
        Content"). By posting User Content, you grant us the right to use,
        reproduce, modify, and distribute your User Content for any purpose,
        without any obligation to compensate you.
      </p>
      <h2 style={{ fontWeight: "bold" }}>4. Prohibited Conduct</h2>
      <p>
        You agree not to engage in any of the following prohibited conduct while
        using the Jannah App:
      </p>
      <ul>
        <li>Violating any applicable laws or regulations.</li>
        <li>
          Impersonating any person or entity or falsely claiming an affiliation
          with any person or entity.
        </li>
        <li>
          Uploading, posting, or transmitting any content that is unlawful,
          harmful, threatening, abusive, defamatory, obscene, or otherwise
          objectionable.
        </li>
        <li>
          Interfering with or disrupting the functioning of the App or its
          servers.
        </li>
        <li>
          Attempting to gain unauthorized access to the App, other user
          accounts, or computer systems.
        </li>
      </ul>
      <h2 style={{ fontWeight: "bold" }}>5. Intellectual Property</h2>
      <p>
        The Jannah App and all its contents, including but not limited to text,
        graphics, images, logos, and software, are the intellectual property of
        Jannah or its licensors and are protected by copyright and other
        intellectual property laws. You may not reproduce, distribute, modify,
        or create derivative works based on the App without our prior written
        consent.
      </p>
      <h2 style={{ fontWeight: "bold" }}>6. Disclaimer of Warranties</h2>
      <p>
        The Jannah App is provided on an "as is" and "as available" basis,
        without any warranties or representations, express or implied. We do
        not warrant that the App will be uninterrupted, error-free, or free
        from viruses or other harmful components. Your use of the App is at
        your own risk.
      </p>
      {/* Add similar sections for the remaining points */}
      <h2 style={{ fontWeight: "bold" }}>11. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests related to these Terms
        of Use or the use of the Jannah App, please contact us at{" "}
        <span
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
          onClick={emailContact}
        >
          jannahadhaninfo@gmail.com
        </span>
        .
      </p>
      <p>
        Thank you for using Jannah App, and we hope you enjoy your spiritual
        journey with us!
      </p>
      <p style={{ fontStyle: "italic" }}>Sincerely,</p>
      <p style={{ fontWeight: "bold" }}>Jannah Team</p>
    </div>
  );
};

export default TermsOfUse;
