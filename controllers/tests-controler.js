import testsService from '../services/tests-service.js';
export default class TestController {

    static async create(req, res) {
        try {
            const tests = await testsService.create(req.body);
            if (!tests) {
                return res.status(404).json({ msg: error.message });
            }
            res.status(200).json(tests);
        } catch (error) {
            res.status(500).json( { msg: error.message });
        }
    }
    static async addQuest(req, res) {
        try {
            const tests = await testsService.addQuest(req.body);
            if (!tests) {
                return res.status(404).json({ msg: error.message });
            }
            res.status(200).json(tests);
        } catch (error) {
            res.status(500).json( { msg: error.message });
        }
    }
    static async getAll(req, res) {
        try {
            const Quests = await testsService.getAll();
            if (!Quests) {
                return res.status(404).json({ msg: "Quests not found" });
            }
            return res.status(200).json(Quests);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
    static async getById(req, res) {
        try {
            const quset = await testsService.getById(req.params.id);
            if (!quset) {
                return res.status(404).json({ msg: "quset not found" });
            }
            res.status(200).json(quset);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    static async update(req, res) {
        try {
            const quset = await testsService.updateQuest(req.params.id, req.body);
            if (!quset) {
                return res.status(404).json({ msg: "quset not found" });
            }
            res.status(200).json(quset);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

   
}
