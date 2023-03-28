# stoicheia

Στοιχεῖα, **Elements**

Stoicheia is a place where I showcase various algorithms and data structures for the sake of my own edification. Given that many of these are geometric and graphical in nature, what better namesake than one of the most foundational texts of geometry and mathematics of all time: Euclid's **Elements**

The Stoicheia project consists of two parts: the Stoicheion, and Iktinos. If you're instead here for algorithms, just start exploring the [main site] or [read the code] of the various stoicheion. If you're here for web/server infra of this site, check out the Iktinos section.

TODO add link to the project

## Iktinos

Iktinos is a simple static site generator for the stoicheia website. Instead of spinning up a whole website with my clj stack or with django, I decided to go with a very simple approach due to the nature of this project. To use it run the command below

`bb iktinos`

In order for iktinos to generate a site, it requires the following directory structure

- /iktinos.bb
- /stoicheion
- /stoicheion/<root-folder-of-quil-cljs-project>/
- /stoicheion/<root-folder-of-quil-cljs-project>/page.edn

The info.edn file stores the following information:

```
{:title "The title of the page"
 :tags  ["list" "of" "tags"]
 :date  "date-it-was-made"
 :content [[:hiccup code][:included after the frame of js]]}
```

TODO add link to babashka
