# sample-nodejs-todo

## Overview

This is a sample plan designed to showcase a simple TODO system.

## Email Simulation with MailDev

When running locally, this system uses MailDev to simulate email sending. 
[MailDev](https://github.com/maildev/maildev) doesn't actually send any emails but provides a w
eb interface where you can view the emails that would have been sent.

Read more here: https://github.com/maildev/maildev

### Accessing the MailDev Web Interface

Run the following command in the root of this repository to open the MailDev web interface:

```bash
sh open-inbox.sh
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
