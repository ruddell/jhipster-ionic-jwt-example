# JHipster + Ionic with JWT Auth Demo

* [M-Ionic][m-ionic-url]
* [JHipster][jhipster-url]

[m-ionic-url]: https://github.com/mwaylabs/generator-m-ionic
[jhipster-url]: https://github.com/jhipster/generator-jhipster

This project was generated with Generator-M-Ionic v1.8.0. Javascript files dealing with authentication were copied over from JHipster v.3.1.0 and slightly modified (see commit messages).

It requires a running JHipster project using JWT Auth. 
Users can successfully login, states can be locked down to certain authorities, and links/content can be displayed depending on a user's authorities.

An `ionic.project` file was set up to proxy requests so that CORS does not have to be enabled on the JHipster project.  When deployed to a device, it accesses pages from `file://` so CORS isn't an issue there.
