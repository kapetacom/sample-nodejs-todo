# sample-nodejs-todo

## Overview

This is a sample plan designed to showcase a simple TODO system.

## Email Simulation with gosmtpd

When running locally, this system uses gosmtpd to simulate email sending. gosmtpd doesn't actually send any emails but provides a web interface where you can view the emails that would have been sent.

### Accessing the gosmtpd Web Interface

Run the following command in the root of this repository to open the gosmtpd web interface:

```bash
sh open-gosmtpd-inbox.sh
```

A browser window will appear, displaying the web interface. Any emails sent by the system will appear here for your review.

## Publishing the Plan

To publish the plan, run the following command int the root of where you've cloned this repostiory:

```bash
kap registry push
```

## Deploying the plan

Visit [app.kapeta.com](https://app.kapeta.com/deployments) to deploy the plan.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
